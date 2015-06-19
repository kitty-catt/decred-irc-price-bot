"use strict"

var wiki = require ('sk-wikipedia');

exports.module = function() {
	this.onCommand_ping = function(nick, command) {
		this.channel.say(wiki);
	}
}
