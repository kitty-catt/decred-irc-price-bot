# Modules/Command List

• globalServModules: server-level modules  
• globalModules: modules that are loaded in all channels  
• ``` "#channel": {  
	donotslap: {}, // these are where channel specific modules are loaded  
  }, ```

### Modules list
These all assume you are using the ! prefix.

#### yesno
Usage: y/n  
Makes the bot say either yes or no.

#### chance
Usage: !chance  
Gives a random number.

#### tell
Usage: !tell <Nickname> <Message>  
This leaves a message for the target user. When the selected user says something, the notice is said.  
Example:  
User: !tell OtherUser hi  
OtherUser: Hi there!  
Bot: User: Tell OtherUser hi  

#### calc
This module requires calc from here: [Calc]  (http://sourceforge.net/projects/calc/files/calc/2.12.4.13/)  
Usage: !calc <Problem>  
These commands can calculate problems:  
!calc (2+2) - prints 4  
!calc print (2+2) - prints 4  

These commands can print text:  

!calc ("hi") - prints "hi"  
!calc print("hi") - prints hi  
!calc printf("hi") - prints hi  

#### seen
Usage: !seen <Nickname>  
This shows when the last user was seen.  

#### ddg
Usage: !ddg searchquery  
This is basically a mini-search engine.  

#### donotslap
(Bot needs chanop)  
User: /me slaps user around a bit with a large fishbot  
The bot will then kick you. >:)  

#### fire
Usage: !fire  
Bot: Help! My object is on fire! Please use the firehose!  
You: /me uses the firehose  
Bot: Thanks!  

#### flipcoin
Usage: !flipcoin  
Returns heads or tails.  

#### rolldice
Usage: !rolldice  
Returns a number between 1 and 6.  

#### time
Usage: !time  
Returns the date and time.  

#### truefalse
Usage: t/f  
Says true or false.  

#### welcome
Usage: No usage - just join the channel  
This module welcomes you when you join the channel.  

#### excuse
Usage: !excuse  
Returns a weird excuse.  

#### say
Usage: !say <Message>  
Says the message that you say in the command.  

#### cookie  
Usage: !cookie  
Gives the user a cookie with a beverage.

#### fortune  
Usage: !fortune  
Returns a fortune.

#### eightball  
Usage: !eightball  
Returns a fortune from an eightball.

#### card  
Usage: !card  
Returns a random card.  

#### help  
Usage: !help   
Gives a link to this file for the commands.

#### whois  
Usage: !whois <IP-Address-Query>  
Returns information on the IP using ip-api.com  

#### google  
Usage: !google <Search-Query>  
Returns the top Google search result  

#### wolfram, wa, wolframalpha  
Usage: !wolfram <Query>  
Runs a query through Wolfram|Alpha, returns the information and URL. Requires a Wolfram|Alpha API Key  

#### md5  
Usage: !md5 <String>  
Creates an md5 hash  

#### sha1  
Usage: !sha1 <String>  
Creates a sha1 hash  

#### sha512  
Usage: !sha512 <String>  
Creates a sha512 hash  

#### sha256  
Usage: !sha256 <String>  
Creates a sha256 hash  

#### ping  
Usage: !ping  
Checks if bot is alive; Bot responds with "Pong!"  

#### leet  
Usage: !leet <Message>  
Converts your message into "leet speak"  

#### wiki  
Usage: !wiki <Search>  
Search Wikipedia  

#### tinyurl
Usage: !tinyurl url
Shorten the URL

#### isgd
Usage: !isgd url
Shorten the URL

#### vgd
Usage: !vgd url
Shorten the URL

#### dronebl
Usage: !dronebl ip-address
Checks the given IP against DroneBL's dns black lists

#### fixnick
Usage: !fixnick
Changes nick to globalNick and executes connectcmd

#### spellcheck
Usage: !spellcheck <sentence>
Checks the given sentence against a trusted sourceforge

#### yoda
Usage: !yoda <sentence>
Translate your text into Yoda's main language

#### password
Usage: !password
Generates a random alpha-numeric 64-character password