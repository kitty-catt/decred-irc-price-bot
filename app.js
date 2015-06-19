#!/usr/bin/env node

var color = require('colors');

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
            		console.log("[DAEMON]".white + " ModularBot's daemon running. PID: " + pid + "".green);
        	else
            		console.log("ModularBot's daemon is not running.".green);
        	break;

    	default:
        	console.log("Usage: node app.js [start|stop|kill|restart|status]".green);
	}
} else {
	console.log("Daemon Sevice -- For Normal mode, execute main.js".green);
	console.log("node app.js [start|stop|restart|status]".green);
}
