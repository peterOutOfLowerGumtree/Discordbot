function diceRoll(args) {
    if (args) {
        var output;
        if (args.includes("20")) {
            output = Math.floor(Math.random() * 20 + 1);
            return ("Your random d20 number is: " + output);
        } else if (args.includes("12")) {
            output = Math.floor(Math.random() * 12 + 1)
            return ("Your random d12 number is: " + output);
        } else if (args.includes("10")) {
            output = Math.floor(Math.random() * 10 + 1)
            return ("Your random d10 number is: " + output);
        } else if (args.includes("8")) {
            output = Math.floor(Math.random() * 8 + 1)
            return ("Your random d8 number is: " + output);
        } else if (args.includes("6")) {
            output = Math.floor(Math.random() * 6 + 1)
            return ("Your random d6 number is: " + output);
        } else if (args.includes("4")) {
            output = Math.floor(Math.random() * 4 + 1)
            return ("Your random d4 number is: " + output);
        } else {
            return ("Invalid dice type!");
        }
    } else return ("Enter a valid dice type (20, 12, 10, 8, 6, 4).\neg: dice 20");
}

module.exports = {
    diceRoll
};