# Creating Modules
It's quite simple to actually make your own modules for the bot.
1.) Make a file in the [modules directory](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/tree/master/modules)
2.) Inside the file on the first line, put ```"use strict"```
3.) Include any files or external modules to use
4.) Put ```exports.module = function() {``` to declare that this is part of your module.
5.) Put ```this.event = function(return values) {``` but replace ```event``` with one of the following events and replace ```return values``` with the return value specified below:
- onUserJoin: Executed when someone joins the channel, returns the users' nick.
- onUserLeave: Executed when someone leaves the channel, returns the users' nick.
- onMessage: Executed when someone talks in the channel, returns the users' nick and the message.
- onCommand_help: Executed when someone says ```!help``` the channel, replace help with any word, returns the users' nick and arguments.
6.) Insert your desired Node.js code
7.) To message the channel, do something like ```this.channel.say("Your Message Here");```
8.) To send a raw command, do something like ```this.sendCommand("PRIVMSG #channel :Your Message Here");```
9.) To get values from the settings such as the bot's nick or the owner's nick, include the settings file by doing ```var settings = require("../settings").settings;```
- For example, to get the bot's command prefix, you'd want ```settings.defaultCommandTrigger``` or to get the bot's nickname, you'd want ```settings.globalNick```
10.) To end the module, include two curly-braces.
11.) Include the module in your configuration by using the name of the file (without the tailing .js) as the module's name
12.) Optionally, send a [Pull Request](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/pulls) so others can use your awesome module too!
