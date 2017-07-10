const Discord = require("discord.js");
const client = new Discord.Client();
const privateStuff = require("./token");
var token = privateStuff.key

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Ping pong
client.on('message', message => {
  if (message.content.includes('ping')||message.content.includes('Ping')) {
    message.reply('pong');
  }
});

// Enabler
client.on('message', message => {
  console.log(message.content)
  if (message.content.includes('sad')) {
    const messages = ['I don\'t care', 'You deserve what\'s coming to you', 'Kill yourself'];
    var randomIndex = Math.round(Math.random(messages.length-1)+1);
    message.reply(messages[randomIndex]);
  }
});

client.on('message', message => {
  console.log(message.content)
  if (message.content.includes('menacing') || message.content.includes('Menacing')) {
    message.reply("This is Alexbot. I think you meant ゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ");
  }
});

client.login(token);