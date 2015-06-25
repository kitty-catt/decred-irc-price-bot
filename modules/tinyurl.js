"use strict"

var settings = require('../config').settings;
var TinyURL = require('tinyurl');

exports.module = function() { 
	this.onCommand_tinyurl = function(user, args) { 
		if(args.trim() != "") {
			var chan = this.channel;
			TinyURL.shorten(args.split(" ")[0], function(res) {
        chan.say(res);
      });
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "say <Message>");
		}
	} 
}
