const privateStuff = require("../token");
var wolfram = require("wolfram").createClient(privateStuff.waKey);

function wolf(args, callback) {
    wolfram.query(args, function (err, result) {
        var wolfNum;
        if (args.includes("graph")) {
            if (result[1].subpods[1]) {
                wolfNum = result[1].subpods[1].image;
                callback(wolfNum);
            } else {
                wolfNum = result[1].subpods[0].image;
                callback(wolfNum);
            }
        } else if (args.includes("integrate") ||
            args.includes("differentiate")) {
            wolfNum = result[0].subpods[0].value;
            callback(wolfNum);
        } else if (args.includes("+") ||
            args.includes("-") ||
            args.includes("*") ||
            args.includes("/") ||
            args.includes("^")) {
            wolfNum = result[1].subpods[0].value;
            callback(wolfNum);
        } else {
            callback("Please enter a valid argument (+,-,*,/,^,{integrate [function]},{differentiate [function]},{graph [function]})");
        }
    });
}

module.exports = {
    wolf
}