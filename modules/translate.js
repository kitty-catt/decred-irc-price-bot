"use strict"
// Translate module - usage: translate from-language target-language message

var settings = require('../config').settings;
var request = require('request');
var XML = require('pixl-xml');

exports.module = function() { 
	this.onCommand_tr = function(user, args) {
		if(args.trim() != ""){
			var chan = this.channel;
			request('https://translate.yandex.net/api/v1.5/tr/translate?key=' + this.settings.key + '&lang=' + args.split(" ")[0] + '-' + args.split(" ")[1] + '&text=' + encodeURI(args.split(" ").slice(2,args.split(" ").length)).replace('%20', '+'), function (error, response, body) {
					if (!error && response.statusCode == 200) {
						var obj = XML.parse(body);
						String.prototype.replaceAll = function(str1, str2, ignore) { return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2); } 
						chan.say(obj.text.replaceAll(",", " ").replaceAll("  ", ", "));
					}
			 });
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "tr <To Language> <Target Language> <Message>");
		}
	} 
	this.onCommand_translate = function(user, args) {
		if(args.trim() != ""){
			var chan = this.channel;
			request('https://translate.yandex.net/api/v1.5/tr/translate?key=' + this.settings.key + '&lang=' + args.split(" ")[0] + '-' + args.split(" ")[1] + '&text=' + encodeURI(args.split(" ").slice(2,args.split(" ").length)).replace('%20', '+'), function (error, response, body) {
					if (!error && response.statusCode == 200) {
						var obj = XML.parse(body);
						String.prototype.replaceAll = function(str1, str2, ignore) { return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2); } 
						chan.say(obj.text.replaceAll(",", " ").replaceAll("  ", ", "));
					}
			 });
		} else {
			this.channel.say("You're doing it wrong.\nUsage: " + settings.defaultCommandTrigger + "tr <To Language> <Target Language> <Message>");
		}
	} 
}
