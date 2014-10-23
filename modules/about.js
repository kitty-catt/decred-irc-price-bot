"use strict"
var os = require("os");
var settings = require("../settings.js").settings;

exports.module = function() {
	this.onCommand_about = function(nick, command) {
		this.channel.say(settings.globalNick + " by Dirbaio, Nina, and LifeMushroom. Running on Node.js " + process.versions.node + " (" + os.type() + " " + os.release() + " " + os.arch() + ").");
	}
}
