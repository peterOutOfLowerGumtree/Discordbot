const commando = require("discord.js-commando");
const diceFunc = require("../../functionality/diceFunc.js")

class diceCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "dice",
            group: "responses",
            memberName: "dice",
            description: "enter valid d20, d12, d10, d8, d6 or d4 and roll the dice!",
            example: "d20"
        });
    }

    async run(message, args) {
        message.reply(diceFunc.diceRoll(args));
    }
}

module.exports = {
    diceCommand
};