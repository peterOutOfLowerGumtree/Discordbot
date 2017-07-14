const commando = require("discord.js-commando");
const presFunc = require("../../functionality/presFunc.js");

class presCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "alivepres",
            group: "jsprojects",
            memberName: "alivepres",
            description: "Which president was alive in any given date",
            example: "alivepres 1900"
        });
    }

    async run(message, args) {
        let dogs = function (msg) {
            message.reply(`**Alive in ${args}:**\n`+msg);
        };
        presFunc.whoIsAlive(args, dogs);
    }
}

module.exports = presCommand;