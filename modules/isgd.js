"use strict"

var settings = require('../config').settings;
var isgd = require('isgd');

exports.module = function() { 
	this.onCommand_isgd = function(user, args) { 
		if(args.trim() != "") {
			var chan = this.channel;
			isgd.shorten(args.split(" ")[0], function(res) {
        chan.say(res);
      });
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "say <Message>");
		}
	} 
}
