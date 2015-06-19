"use strict"

var wiki = require ('wtf_wikipedia');

exports.module = function() {
	this.onCommand_wiki = function(nick, args) {
		var chan = this.channel;
		if(args.trim() != "") {
			wikipedia.from_api(args, "en", function(markup){                                                                                                               
  				chan.say(wikipedia.plaintext(markup).substring(0,100) + "...");                                                                                                 
			});
			chan.say("https://en.wikipedia.org/w/index.php?title=" + encodeURIComponent(args));
		} else {
			chan.say("You're doing it wrong.\nUsage: wiki query");
		}
	}
}
