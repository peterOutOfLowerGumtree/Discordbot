const commando = require("discord.js-commando");

class getLostCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "berude",
            group: "responses",
            memberName: "berude",
            description: "say Get Lost!",
            example: "berude"
        });
    }
    async run(message, args) {
        message.reply("Get Lost!");
    }
}

module.exports = {
    getLostCommand
};