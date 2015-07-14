var settings = require('../config').settings;
var request = require('request');

exports.module = function() { 
	this.onCommand_password = function(user, args) { 
		var chan = this.channel;
		request('https://passwd.me/api/1.0/get_password.json?type=random&length=64', function (error, response, body) {
			if (!error && response.statusCode == 200) {
				chan.say("Random Password: " + JSON.parse(body).password);
			} else {
				chan.say("There was an error processing your request.");
			}
		});
	};
};