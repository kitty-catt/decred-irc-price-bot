"use strict";
// Prints a fortune on command

var fortunes = require("./misc/fortunes.js").fortunes;

exports.module = function() {
	this.onCommand_fortune = function(nick, command) {
		var sayFortune = fortune[Math.floor(Math.random() * fortune.length)];
		this.channel.say(sayFortune);
	};
};
