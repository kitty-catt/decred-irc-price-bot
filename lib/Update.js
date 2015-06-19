"use strict"

var color = require('colors');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var sys = require('sys');
var exec = require('child_process').exec;
var fs = require('fs');
var request = require('request');
var tempWrite = require('temp-write');

console.log("[UPDATER]".white + " Checking for updates...".magenta);
fs.readFile('./version.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error("[ERROR] " + err.red);
		process.exit();
	}
	request('https://raw.githubusercontent.com/LifeMushroom/Modular-Node.js-IRC-Bot/master/version.txt', function(error, response, body) {
	if (!error && response.statusCode == 200) {
		if (body > data) {
			console.log("[UPDATER]".white + " Update Found!".magenta);
			rl.question("Update? [yes]/no: ".magenta, function(answer) {
				if (answer == 'yes') {
					fs.readFile('./config.js', 'utf-8', function (err, data) {
						if (err) {
							console.error("[ERROR] " + err.red);
							process.exit();
						}
						var tempconfig = tempWrite.sync(data);
						exec("git pull");
						fs.writeFile('./old_config.js', fs.readFileSync(tempconfig, 'utf-8'), function (err) {
							if (err) {
								console.error("[ERROR] " + err.red);
								process.exit();
							}
							console.log("[UPDATER]".white + " Successfully updated! Your new configuration's name is \"config_old.js\".".magenta);
							console.log("[UPDATER]".white + " Please check your \"config.js\" to add the new features to your \"config_old.js\" and then rename your \"config_old.js\" to \"config.js\"".magenta);
							console.log("[UPDATER]".white + " Please re-run your bot when you are ready!".magenta);
							process.exit();
						});
					});
				} else {
					console.log("[UPDATER]".white + " Update Aborted".magenta);
				}
			});
		} else {
			console.log("[UPDATER]".white + " No updates found... Booted up!".magenta);
		}
	} else {
		console.error("[ERROR] " + err.red);
	}
})
});
