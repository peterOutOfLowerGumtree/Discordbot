const commando = require("discord.js-commando");
const wolfFunc = require("../../functionality/wolfFunc.js");
const privateStuff = require("../../token");
var wolfram = require('wolfram').createClient(privateStuff.waKey);

class wolfCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "wolf",
            group: "apis",
            memberName: "wolf",
            description: "Simple calculations. Valid operators for calculation: +,-,*,/,^,{integrate [function]},{differentiate [function]},{graph [function]}",
            example: "wolf 1+2, wolf integrate 3x"
        });
    }

    async run(message, args) {
        let dogs = function (msg) {
            message.reply(args+" = "+msg);
        }
        wolfFunc.wolf(args, dogs)
    }
}

module.exports = wolfCommand;