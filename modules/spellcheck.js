var settings = require('../config').settings;
var request = require('request');

exports.module = function() { 
	this.onCommand_spellcheck = function(user, args) { 
		if(args.trim() !== "") {
			var chan = this.channel;
			var options = {
				url: "https://montanaflynn-spellcheck.p.mashape.com/check/?text=" + encodeURI(args),
				headers: {
					'X-Mashape-Key': settings.mashapeKey,
					'Accept': 'text/plain'
				}
			};
			function callback(error, response, body) {
				if (!error && response.statusCode == 200) {
					if (JSON.parse(body).suggestion == args) {
						chan.say("I see nothing wrong with your sentence.");
					} else {
						chan.say("Correction: " + JSON.parse(body).suggestion);
					}
				} else {
					chan.say("There was an error processing your request.");
				}
			}
			request(options, callback);
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandPrefix + "spellcheck <sentence>");
		}
	};
};