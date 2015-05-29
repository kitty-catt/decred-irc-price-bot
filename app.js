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
            console.log("ModularBot's daemon running. PID: " + pid);
        else
            console.log("ModularBot's daemon is not running.");
        break;

    default:
        console.log("Usage: [start|stop|kill|restart|status]");
}
