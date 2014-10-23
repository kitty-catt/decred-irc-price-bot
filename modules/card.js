"use strict"
// Returns random card

var cardSuites = require("./misc/cardsuites.js");
var cardValues = require("./misc/cardvalues.js");

exports.module = function() {
	this.onCommand_card = function(nick, command) {
	
		var saySuite = cardSuite[Math.floor(Math.random() * cardSuite.length)];
		var sayValue = cardValue[Math.floor(Math.random() * cardValue.length)];
		
		this.channel.say(sayValue + " of " + saySuite);
	
	}
}