"use strict"

exports.module = function() {
	this.onCommand_help = function(nick, command) {
		this.channel.say("Pong!");
	}
}
