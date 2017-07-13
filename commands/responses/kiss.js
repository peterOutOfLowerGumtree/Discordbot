const commando = require("discord.js-commando");

class kissCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "kiss",
            group: "responses",
            memberName: "kiss",
            description: "kiss the user",
            example: "kiss"
        });
    }
    async run(message, args) {
        message.reply("😘");
    }
}

module.exports = kissCommand;