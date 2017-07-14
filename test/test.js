const pokeFunc = require("../functionality/pokeFunc.js");
const diceFunc = require("../functionality/diceFunc.js");
const rpsFunc = require("../functionality/rpsFunc.js");
const wolfFunc = require("../functionality/wolfFunc.js");
const presFunc = require("../functionality/presFunc.js");

const privateStuff = require("../token");
var wolfram = require("wolfram").createClient(privateStuff.waKey);
var assert = require("assert");


describe("pokeFunc", function () {
  it("Should output a correct type effectiveness", function () {
    var result = pokeFunc.calcMatchup("fire water");
    assert.equal(result, "fire is 0.5x effective against water");
    result = pokeFunc.calcMatchup("water fire");
    assert.equal(result, "water is 2x effective against fire");
  });

  it("Should output not enough args message", function () {
    var result = pokeFunc.calcMatchup("fire");
    assert.equal(result, "Invalid number of arguments");
  });

  it("Should output help message", function () {
    var result = pokeFunc.calcMatchup("");
    assert.equal(result, "Enter an attacking type and defending type.\neg: !pokemontype fire water");
  });
});


describe("diceFunc", function () {
  describe("Successful inputs", function () {
    it("Should return number between 1 and 20", function () {
      var result = diceFunc.diceRoll("20").split(": ")[1];
      assert.equal(result > 0 && result <= 20, true);
    });

    it("Should return number between 1 and 12", function () {
      var result = diceFunc.diceRoll("12").split(": ")[1];
      assert.equal(result > 0 && result <= 12, true);
    });

    it("Should return number between 1 and 10", function () {
      var result = diceFunc.diceRoll("10").split(": ")[1];
      assert.equal(result > 0 && result <= 10, true);
    });

    it("Should return number between 1 and 8", function () {
      var result = diceFunc.diceRoll("8").split(": ")[1];
      assert.equal(result > 0 && result <= 8, true);
    });

    it("Should return number between 1 and 6", function () {
      var result = diceFunc.diceRoll("6").split(": ")[1];
      assert.equal(result > 0 && result <= 6, true);
    });

    it("Should return number between 1 and 4", function () {
      var result = diceFunc.diceRoll("4").split(": ")[1];
      assert.equal(result > 0 && result <= 4, true);
    });
  });

  describe("Unsuccessful inputs", function () {
    it("Should return an \"Invalid dice type!\" error", function () {
      var result = diceFunc.diceRoll("21");
      assert.equal(result, "Invalid dice type!");
    });

    it("Should return an \"Enter a valid dice type\" error", function () {
      var result = diceFunc.diceRoll("");
      assert.equal(result, "Enter a valid dice type (20, 12, 10, 8, 6, 4).\neg: dice 20");
    });
  });
});

describe("rpsFunc", function () {
  describe("Successful inputs", function () {
    it("Should return a \"Rock vs <computer selection>\" output", function () {
      var result = rpsFunc.calculateWinner("rock");
      assert.equal(
        (result === "Rock draws with rock. No one wins!" ||
          result === "Rock is covered by paper. Bot wins!" ||
          result === "Rock crushes scissors. Player wins!" ||
          result === "Rock crushes lizard. Player wins!" ||
          result === "Rock is vaporised by Spock. Bot wins!"), true);
    });

    it("Should return a \"Lizard vs <computer selection>\" output", function () {
      var result = rpsFunc.calculateWinner("lizard");
      assert.equal(
        (result === "Lizard is crushed by rock. Bot wins!" ||
          result === "Lizard eats paper. Player wins!" ||
          result === "Lizard is decapitated by scissors. Bot wins!" ||
          result === "Lizard draws with lizard. No one wins!" ||
          result === "Lizard poisons Spock. Player wins!"), true);
    });
  });

  describe("Unsuccessful inputs", function () {
    it("Should be false vs a \"Rock vs <computer selection>\" output", function () {
      var result = rpsFunc.calculateWinner("scissors");
      assert.equal(
        (result === "Rock draws with rock. No one wins!" ||
          result === "Rock is covered by paper. Bot wins!" ||
          result === "Rock crushes scissors. Player wins!" ||
          result === "Rock crushes lizard. Player wins!" ||
          result === "Rock is vaporised by Spock. Bot wins!"), false);
    });

    it("Should return an \"Enter a valid input\" output", function () {
      var result = rpsFunc.calculateWinner("");
      assert.equal(result, "Enter rock/paper/scissors/lizard/spock.\neg: rps rock");

    });
  });
});

describe("wolfFunc", function () {
  it("Should output the correct result for addition", function () {
    var result = wolfFunc.wolf("3+4", (a) => assert.equal(a, "7"));
  });

  it("Should output the correct result for integration", function () {
    var result = wolfFunc.wolf("integrate 7x-2", (a) => assert.equal(a, "(7 x^2)/2 - 2 x + constant"));
  });

  it("Should output a link to a graph image", function () {
    var result = wolfFunc.wolf("graph y=sin(x^2)", (a) => assert.equal(a, "http://www3.wolframalpha.com/Calculate/MSP/MSP17391bd4913154dbeib3000052c1hcif4ef16f8f?MSPStoreType=image/gif&s=39"));
    result = wolfFunc.wolf("graph y=sin(2x)", (a) => assert.equal(a, "http://www4d.wolframalpha.com/Calculate/MSP/MSP327623d061070771d889000020438dh6f99ba76c?MSPStoreType=image/gif&s=32"));
  });
});

describe("presFunc", function () {
  it("Should output the correct presidents for test date 1900", function () {
    var result = presFunc.whoIsAlive("1900", (a) => assert.equal(a, "Grover Cleveland\nBenjamin Harrison\nWilliam McKinley\nTheodore Roosevelt\nWilliam Howard Taft\nWoodrow Wilson\nWarren G. Harding\nCalvin Coolidge\nHerbert Hoover\nFranklin Roosevelt\nHarry S. Truman\nDwight Eisenhower\n"));
  });

  it("Should output the correct presidents for test date 2000", function () {
    var result = presFunc.whoIsAlive("2000", (a) => assert.equal(a, "Gerald Ford\nJimmy Carter\nRonald Reagan\nGeorge Bush\nBill Clinton\nGeorge W. Bush\nBarack Obama\n"));
  });
});