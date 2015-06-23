var chalk = require('chalk');
var logLevel = 3;

exports.debug = function(what) {if(logLevel >= 4) console.log(chalk.green("[DEBUG]   "+what)); }
exports.info  = function(what) {if(logLevel >= 3) console.log(chalk.blue("[INFO]    "+what)); }
exports.warning  = function(what) {if(logLevel >= 2) console.log(chalk.yellow("[WARNING] "+what)); }
exports.error = function(what) {if(logLevel >= 1) console.log(chalk.red("[ERROR]   "+what)); }
exports.critical  = function(what) {if(logLevel >= 1) console.log(chalk.bold.red("[CRITICAL]"+what)); }
