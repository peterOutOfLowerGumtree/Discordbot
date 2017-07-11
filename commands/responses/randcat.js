var randomCat = require('random-cat');
const commando = require("discord.js-commando");

class catCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: 'cat',
            group: 'responses',
            memberName: 'cat',
            description: 'post a cat',
            example: 'cat'
        });
    }
    async run(message, args) {
        message.reply(randomCat.get());
    }
}
module.exports = catCommand;