"use strict";
// Say module - usage: say message

var settings = require('../config').settings;

exports.module = function() { 
	this.onCommand_say = function(user, args) { 
		if(args.trim() !== "") {
			this.channel.say(args);
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandPrefix + "say <Message>");
		}
	} ;
};
