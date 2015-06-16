![Register](http://i.imgur.com/eEOU8vR.jpg)
First, register for an [OpenShift account](https://www.openshift.com/app/account/new)

![Home Panel](http://i.imgur.com/VL31M0B.jpg)
Once you're in, click Create Your First Application.

![Application Type](http://i.imgur.com/E7rXb0G.jpg)
Setup your application as Node.js 0.10 or the newest version.

![Application Setup](http://i.imgur.com/2vaxKIf.jpg)
Now as you setup your application, feel free to name it whatever you like. Just make sure you source the repo as ```https://github.com/LifeMushroom/Modular-Node.js-IRC-Bot```.

![Install Client](http://i.imgur.com/mHW8KT1.jpg)
Now that you're all setup, follow [OpenShift's Tutorial](https://developers.openshift.com/en/getting-started-overview.html) on how to install the RHC client.

![Login](http://i.imgur.com/yBFqI5W.jpg)
Now login using the RHC Client to your application via SSH.

![Move To Directory and Install Dependencies](http://i.imgur.com/Bk3vxkj.jpg)
Now run ```cd app-root/repo``` and then ```npm install request daemonize2```

![Edit and Run](http://i.imgur.com/SNd2bcE.jpg)
Now run ```nano settings.js``` to edit your settings (Use control + X to exit and save).

Now that you're finally done setting it up, run the bot using ```node app.js start```
