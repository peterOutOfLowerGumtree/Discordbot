const commando = require("discord.js-commando");
const rpsFunc = require("../../functionality/rpsFunc.js");

class rpsCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "rps",
            group: "jsprojects",
            memberName: "rps",
            description: "rock paper scissors",
            example: "rps rock"
        });
    }

    async run(message, args) {
        message.reply(rpsFunc.calculateWinner(args));
    }
}

module.exports = {
    rpsCommand
};