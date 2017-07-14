const commando = require("discord.js-commando");

class fCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "f",
            group: "responses",
            memberName: "f",
            description: "Pay respects",
            example: "f"
        });
    }
    async run(message, args) {
        message.reply("Respects received. Thank you.");
        message.channel.send({
            files: ["./commands/responses/bless_you_my_child.jpg"]
        });
    }
}

module.exports = fCommand;