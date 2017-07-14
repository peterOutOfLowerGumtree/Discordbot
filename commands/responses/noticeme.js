const commando = require("discord.js-commando");

class noticeCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "noticeme",
            group: "responses",
            memberName: "noticeme",
            description: "Get noticed",
            example: "noticeme"
        });
    }
    async run(message, args) {
        message.channel.send({
            files: ["./commands/responses/noticeme.gif"]
        });
    }
}

module.exports = noticeCommand;