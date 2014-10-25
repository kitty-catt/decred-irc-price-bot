"use strict"
var os = require("os");
var settings = require("../settings.js").settings;

exports.module = function() {
	this.onCommand_help = function(nick, command) {
		this.channel.say(settings.globalNick + " by Dirbaio, Nina, and LifeMushroom. Running on Node.js " + process.versions.node + " (" + os.type() + " " + os.release() + " " + os.arch() + ").");
		this.channel.say("For a list of available commands, check https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/COMMANDS.md");
	}
}
