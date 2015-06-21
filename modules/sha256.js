"use strict"

var crypto = require("crypto");
var sha256 = crypto.createHash("sha256");

exports.module = function() {
	this.onCommand_sha256 = function(nick, args) {
		if(args.trim() != "") {
			sha256.update(args, "utf8");
			this.channel.say(sha256.digest("base64"));
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "sha256 <Message>");
		}
	}
}
