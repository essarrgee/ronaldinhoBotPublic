const Discord = require('discord.js');
const client = new Discord.Client();

function CheckRonaldinho(string) {
	var re = new RegExp("(r+)(o*)(n*)ald(i*)(n*)(h*)(i*)(o+)", "i");
	var isRonaldinho = re.test(string);
	return isRonaldinho;
}

client.on('ready', ()=>{
	client.user.setActivity('with ur mom lol');
})

client.on('message', (message) => {
	if (message.author != client.user) {
		var isRonaldinho = CheckRonaldinho(message);
		if (isRonaldinho) {
			message.channel.send("Hahahaha... RONALDINHO SOCCERRR");
		}
	}
})

//client.login("BOT ID GOES IN HERE");