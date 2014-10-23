"use strict"
// Gives the user a cookie

var cookies = require("./misc/cookies.js");
var sizes = require("./misc/sizes.js");
var flavors = require("./misc/flavors.js");
var methods = require("./misc/methods.js");
var beverage = require("./misc/beverages.js");

exports.module = function() {
	this.onCommand_cookie = function(nick, command) {
	
		var sayCookie = cookie[Math.floor(Math.random() * cookie.length)];
		var saySize = size[Math.floor(Math.random() * size.length)];
		var sayFlavor = flavor[Math.floor(Math.random() * flavor.length)];
		var sayMethod = method[Math.floor(Math.random() * method.length)];
		var sayBev = bev[Math.floor(Math.random() * bev.length)];
		
		this.channel.say("Here, I'll " + sayMethod + " you a " + sayFlavor + " " + saySize + " " + sayCookie + " cookie with a side of " + sayBev + ".");
	
	}
}