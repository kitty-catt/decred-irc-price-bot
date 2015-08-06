"use strict";

var net = require('net');

exports.module = function() {
	this.onModuleStart = function(settings) {
	
		if(!this.settings.allowedip)
			this.settings.allowedip = "127.0.0.1";
		
		var self = this;
		this.server = net.createServer(function(co) {
			if(self.settings.allowedip != "any" && co.remoteAddress != self.settings.allowedip)
			{
				co.end(); 
				console.log("[Warning] Killing report server's unauthorized connection from IP "+co.remoteAddress);
				return;
			}
			
			co.on("data", function(data) {
				self.channel.say(data);
			});
		});
		
		if(this.settings.allowedip == "127.0.0.1")
			this.server.listen(this.settings.port, "127.0.0.1");
		else
			this.server.listen(this.settings.port);
	};

	this.onModuleDestroy = function() {
		this.server.close();
	};
};
