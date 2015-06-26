"use strict";

var settings = require('../config').settings;
var vgd = require('vgd');

exports.module = function() { 
	this.onCommand_vgd = function(user, args) { 
		if(args.trim() !== "") {
			var chan = this.channel;
			vgd.shorten(args.split(" ")[0], function(res) {
				chan.say(res);
			});
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "vgd <URL>");
		}
	};
};
