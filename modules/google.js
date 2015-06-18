"use strict"
// Google module - usage: google query

var settings = require("../config.js").settings;
var google = require('google');
google.resultsPerPage = 1;

exports.module = function() { 
	this.onCommand_google = function(user, args) { 
		if(args.trim() != "") {
			google(args, function (err, next, links) {
 				for (var i = 0; i < links.length; ++i) {
					this.channel.say(links[i].link + " -- " + links[i].title + ": \"" + links[i].description + "\"");
				}
			});
		} else {
			this.channel.say("You're doing it wrong.\nUsage: google query");
		}
	} 
}
