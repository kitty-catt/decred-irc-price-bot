"use strict";

var request = require('request');
var XML = require('pixl-xml');

exports.module = function() { 
	this.onCommand_cat = function(user, args) { 
		var chan = this.channel;
		if(args === "") {
                        var rURL = "http://thecatapi.com/api/images/get?format=xml";
                } else {
                        var rURL = "http://thecatapi.com/api/images/get?format=xml&image_id=" + args.split(" ")[0];
                }
	        request($rURL, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				chan.say("Cat " + XML.parse(body).data.images.image.id + ": " + data.data.images.image.url);
			} else {
				chan.say("[ERROR] " + error);
				console.err(error);
			}
		});
	};
};
