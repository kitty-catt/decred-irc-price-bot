"use strict"

var settings = require('../config').settings;
var md5 = require('MD5');

exports.module = function() {
	this.onCommand_md5 = function(nick, args) {
		if(args.trim() != "") {
			this.channel.say(md5(args));
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "md5 <Message>");
		}
	}
}
