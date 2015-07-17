"use strict";

var request = require('request');

exports.module = function() {
	this.onMessage = function(user, message) {
		if (message.toLowerCase().indexOf("y/n") != -1) {
			var chan = this.channel;
			request("http://yesno.wtf/api", function(err, res, body) {
				var data = JSON.parse(body);
				chan.say(user + ": " + data.answer.charAt(0).toUpperCase() + data.answer.slice(1) + "! " + data.image);
			});
		}
	};
};
