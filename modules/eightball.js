"use strict";
// Prints an 8ball fortune

var lines = require("./misc/lines.js").lines;
exports.module = function() {
	this.onCommand_eightball = function(nick, command) {
		var sayBall = line[Math.floor(Math.random() * line.length)];
		this.channel.say(sayBall);
	};
};
