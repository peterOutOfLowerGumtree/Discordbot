const commando = require("discord.js-commando");

class helloCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "hw",
            group: "responses",
            memberName: "hw",
            description: "say hello world!",
            example: "hw"
        });
    }
    async run(message, args) {
        message.reply("Hello World!");
    }
}

module.exports = {
    helloCommand
};