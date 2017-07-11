const commando = require("discord.js-commando");

class diceCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: 'dice',
            group: 'responses',
            memberName: 'dice',
            description: 'enter valid d20, d12, d10, d8, d6 or d4 and roll the dice!',
            example: 'd20'
        });
    }
    async run(message, args) {
        if(message.content.includes('20')) {
            message.reply('Your random d20 number is: '+Math.floor(Math.random()*20+1));
        }
        else if(message.content.includes('12')) {
            message.reply('Your random d12 number is: '+Math.floor(Math.random()*12+1));
        }
        else if(message.content.includes('10')) {
            message.reply('Your random d10 number is: '+Math.floor(Math.random()*10+1));
        }
        else if(message.content.includes('8')) {
            message.reply('Your random d8 number is: '+Math.floor(Math.random()*8+1));
        }
        else if(message.content.includes('6')) {
            message.reply('Your random d6 number is: '+Math.floor(Math.random()*6+1));
        }
        else if(message.content.includes('4')) {
            message.reply('Your random d4 number is: '+Math.floor(Math.random()*4+1));
        }
        else {
            message.reply('Invalid dice type!');
        }
    }
}
module.exports = diceCommand;