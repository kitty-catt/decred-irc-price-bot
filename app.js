#!/usr/bin/env node

var chalk = require('chalk');

if (typeof argv != 'undefined') {
	var daemon = require("daemonize2").setup({
	    main: "main.js",
	    name: "ModularBot",
	    pidfile: "./lib/modularbot.pid"
	});

	switch (process.argv[2]) {

	    case "start":
	        daemon.start();
	        break;

	    case "stop":
        	daemon.stop();
        	break;

    	case "kill":
        	daemon.kill();
        	break;

    	case "restart":
       		daemon.stop(function(err) {
            	daemon.start();
        });
        break;

    	case "status":
        	var pid = daemon.status();
        	if (pid)
            		console.log(chalk.white("[DAEMON]") + chalk.green(" ModularBot's daemon running. PID: " + pid);
        	else
            		console.log(chalk.white("[DAEMON]") + chalk.green(" ModularBot's daemon is not running.");
        	break;

    	default:
		console.log(chalk.white("[DAEMON]") + chalk.green(" Daemon Sevice -- For Normal mode, execute main.js"));
        	console.log(chalk.white("[DAEMON") + chalk.green(" Usage: node app.js [start|stop|kill|restart|status]"));
	}
} else {
	console.log(chalk.white("[DAEMON]") + chalk.green(" Daemon Sevice -- For Normal mode, execute main.js"));
	console.log(chalk.white("[DAEMON]") + chalk.green(" Usage: node app.js [start|stop|restart|status]"));
}
