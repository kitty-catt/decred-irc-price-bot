# Modular-Node.js-IRC-bot

An extremely modular IRC bot written in Node.js (early in dev)

## How to use/install

If you cannot host this or don't want to use your own system, please view the [OpenShift Install Tutorial](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/OpenShift.md) otherwise, continue on...

1. Open ```settings.js``` and configure the file. There are comments in the file that should tell you what to do.
2. Install Node.js. Go in a command prompt and navigate to the bot's folder.
3. If updatenotify is set to true in your settings, install [request](https://www.npmjs.com/package/request) using [npm](https://www.npmjs.com/). This may be ```npm install request``` on your system.
4. If you want to run your bot as daemon, install [daemonize2](https://www.npmjs.com/package/daemonize2) using [npm](https://www.npmjs.com/). This may be ```npm install daemonize2``` on your system.

To start your bot, type ```node main.js``` or alternatively, open ```run.bat```, run ```./run.sh```, or run ```./main.js```. Either, if you want to run it as daemon, run ```node app.js start```.

Your bot should be on the desired channel.

## Modules and how to use them
- For commands, see [COMMANDS.md](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/COMMANDS.md).

- For a tutorial on creating modules, see [CreatingModules.md](https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot/blob/master/CreatingModules.md).
