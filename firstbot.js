const Discord = require("discord.js");
const client = new Discord.Client();
const privateStuff = require("./token");
var token = privateStuff.key

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if(message.content.includes('!bot')) {
    if(message.content.includes('hw')) {
      message.reply('Hello World!')
    }
    else if(message.content.includes('beRude')) {
      message.reply('Get lost!')
    }
    else if(message.content.includes('kiss')) {
      message.reply("😘")
    }
  }
});

client.login(token);