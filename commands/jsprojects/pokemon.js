const commando = require("discord.js-commando");
const pokeFunc = require("../../functionality/pokeFunc.js");

class pokemonCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "pokemontype",
            group: "jsprojects",
            memberName: "pokemontype",
            description: "type matchup generator",
            example: "pokemontype fire water"
        });
    }

    async run(message, args) {
        message.reply(pokeFunc.calcMatchup(args));
    }
}

module.exports = {
    pokemonCommand
};