"use strict"

//Tell -- the only useful function of the old NinaBot
var fs = require("fs");
var settings = require("../config").settings;
if (settings.updatenotify == "true") {
var request = require("request");
}

exports.module = function()
{
	this.normalize = function(ret) {
		ret = ret.replace(/\//g, "");
		ret = ret.replace(/_/g, "");
		ret = ret.replace(/\./g, "");
		ret = ret.replace(/\\/g, "");
		return ret;
	}
	
	this.onModuleStart = function() {
		this.noticesFor = [];
		var self = this;
		fs.readdir("./modules/tell", function(error, listing) {
			if (error) fs.mkdir("./modules/tell");
			for (var i in listing) {
				var file = listing[i];
				file = file.substring(0, file.length - 4);
				self.noticesFor.push(file);
			}
		});
	}

	this.onCommand_tell = function(user, args) {
		var dest = args.split(" ", 1)[0];
		var destOriginal = dest;
		dest = dest.toLowerCase();
		dest = this.normalize(dest);
		var tellMessage = args.substring(args.indexOf(" ")+1);
		tellMessage = tellMessage.trim();

		if (args.indexOf(" ") == -1 || user.trim().length < 1 || tellMessage.trim().length < 1) {
			this.channel.say("You're doing it wrong.\nUsage: tell username message");
			return;
		}

/*		if (this.normalize(args2[0]) == this.normalize(user)) {
			this.channel.say("You can't leave notices for yourself.");
			return;
		}*/

		var self = this;

		if (dest + ".txt".trim() == ".txt") {
			this.channel.say("No, I don't think so.");
			return;
		}
		
//		try {
			var wStream;
			wStream = fs.createWriteStream("./modules/tell/" + dest + ".txt", {flags: 'a'});
			wStream.write("<" + user + "> Tell " + destOriginal + " " + tellMessage + "\n");
			wStream.end();
			this.noticesFor.push(dest);
			this.channel.say("Notice left for " + destOriginal + ".");
/*		} catch (error) {
			self.channel.say("That'd go wrong...");
			return;
		}*/
	}

	this.onMessage = function(user, message) {
		var self = this;

		user = self.normalize(user).toLowerCase();

		if (this.noticesFor.indexOf(user) != -1) {
			fs.readFile("./modules/tell/" + user + ".txt", 'utf8', function(error, content) {
				if (error) return;
				self.channel.say(content);
				fs.unlink("./modules/tell/" + user + ".txt");
			});
		}
	}
}

if (settings.updatenotify == true) {
    fs.readFile('./version.txt', 'utf-8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        request('https://raw.githubusercontent.com/LifeMushroom/Modular-Node.js-IRC-Bot/master/version.txt', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                if (body > data) {
                    var wStream;
                    var owner = settings.globalowner;
                    wStream = fs.createWriteStream("./modules/tell/" + owner.toLowerCase() + ".txt", {
                        flags: 'a'
                    });
                    wStream.write(settings.globalowner + ": Version " + body.split('\n')[0] + " of Modular-Node.js-IRC-Bot is now available. Please considering upgrading from the GitHub repository. https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot" + "\n");
                    wStream.end();
                }
            }
        })
    });
}
