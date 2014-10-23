exports.module = function()
{
	this.onCommand_ddg = function(user, args)
	{
		var self = this;
		var process = require('child_process');

		child = process.exec('cat | ./ddg/ddg.py',
			function (error, stdout, stderr) {
				stdout = stdout.trim();
				if(stdout != "")
				{
					var lines = stdout.split("\n").length;
					var len = stdout.length;
					if(lines > 4 || len > 500)
						self.channel.say("Oops. Output is too long. Sorry!");
					else
	 					self.channel.say(stdout);
				}
				
/*				if (error !== null)
					self.channel.say("Oops! "+stderr);*/
			});
		child.stdin.write(args);
		child.stdin.end();
	}
}
