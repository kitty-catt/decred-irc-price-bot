"use strict";

var settings = require('../config').settings;
var crypto = require("crypto");
var sha256 = crypto.createHash("sha256");
var md5 = crypto.createHash("md5");
var sha1 = crypto.createHash("sha1");
var sha512 = crypto.createHash("sha512");

exports.module = function() {
	this.onCommand_sha256 = function(nick, args) {
		if(args.trim() !== "") {
			sha256.update(args, "utf8");
			this.channel.say(sha256.digest("base64"));
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandPrefix + "sha256 <Message>");
		}
	};
	this.onCommand_md5 = function(nick, args) {
		if(args.trim() !== "") {
			md5.update(args, "utf8");
			this.channel.say(md5.digest("base64"));
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandPrefix + "md5 <Message>");
		}
	};
	this.onCommand_sha1 = function(nick, args) {
		if(args.trim() !== "") {
			sha1.update(args, "utf8");
			this.channel.say(sha1.digest("base64"));
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandPrefix + "sha1 <Message>");
		}
	};
	this.onCommand_sha512 = function(nick, args) {
		if(args.trim() !== "") {
			sha512.update(args, "utf8");
			this.channel.say(sha512.digest("base64"));
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandPrefix + "sha512 <Message>");
		}
	};
};
