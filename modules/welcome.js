"use strict"
var settings = require("../config.js").settings;

// Welcomes the user when they join
exports.module = function() {
	this.onUserJoin = function(user) {
		if (settings.globalNick != user) {
			var message = this.settings.message;
			if(!message)
				message = "Welcome back, %!";
			message = message.replace("%", user);
			this.channel.say(message);
		}
	}
}
