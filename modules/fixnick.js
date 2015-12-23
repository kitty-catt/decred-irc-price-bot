"use strict";
// Fixnick module - usage: fixnick

var settings = require('../config').settings;

exports.module = function() { 
	this.onCommand_fixnick = function(user, args) {
		this.sendCommand("NICK", settings.globalNick);
		this.sendCommand("PRIVMSG", settings.connectcmd);
	};
};
