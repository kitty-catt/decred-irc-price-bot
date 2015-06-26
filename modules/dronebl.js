"use strict";

var settings = require('../config').settings;
var DroneBL = require('dronebl');

exports.module = function() { 
	this.onCommand_dronebl = function(user, args) { 
		if(args.trim() !== "") {
			var chan = this.channel;
			DroneBL.lookup(args.split(" ")[0], function(res) {
        			if (res == 'true') {
        				chan.say(args.split(" ")[0] + " is listed in DroneBL");
        			} else if (res == 'false') {
        				chan.say(args.split(" ")[0] + " is not listed in DroneBL");
        			} else {
        				chan.say("An error occured when looking up that IP address");
        			}
      			});
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "dronebl <IP Address>");
		}
	} ;
};
