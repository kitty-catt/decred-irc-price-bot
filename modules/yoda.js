var settings = require('../config').settings;
var request = require('request');
	
exports.module = function() { 
	this.onCommand_yoda = function(user, args) { 
		if(args.trim() !== "") {
			var chan = this.channel;
			var options = {
				url: "https://yoda.p.mashape.com/yoda?sentence=" + encodeURI(args),
				headers: {
					'X-Mashape-Key': settings.mashapeKey,
					'Accept': 'text/plain'
				}
			};
			function callback(error, response, body) {
				if (!error && response.statusCode == 200) {
					chan.say(body);
				} else {
					chan.say("An error processing your request, there was.");
				}
			}
			request(options, callback);
		} else {
			this.channel.say("Doing it wrong, you are.\nUsage: " + settings.defaultCommandPrefix + "yoda <sentence>");
		}
	};
};