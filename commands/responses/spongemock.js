var sponge = require("spongemock");
const commando = require("discord.js-commando");

class mockCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "mock",
            group: "responses",
            memberName: "mock",
            description: "mOcK",
            example: "mock hello world"
        });
    }
    async run(message, args) {
        message.reply(sponge.spongeMock(args));
    }
}

module.exports = mockCommand;