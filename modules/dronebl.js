"use strict"

var settings = require('../config').settings;
var DroneBL = require('dronebl');

exports.module = function() { 
	this.onCommand_dronebl = function(user, args) { 
		if(args.trim() != "") {
			var chan = this.channel;
			DroneBL.lookup(args.split(" ")[0], function(res) {
        chan.say(res);
      });
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "dronebl <IP Address>");
		}
	} 
}
