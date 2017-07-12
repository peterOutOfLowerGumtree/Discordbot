const pokeFunc = require("../functionality/pokeFunc.js")
const diceFunc = require("../functionality/diceFunc.js")
var assert = require("assert");


describe("pokeFunc", function () {
  it("Should output a correct type effectiveness", function () {
    var output = pokeFunc.calcMatchup("fire water");
    assert.equal(output, "fire is 0.5x effective against water");
    output = pokeFunc.calcMatchup("water fire");
    assert.equal(output, "water is 2x effective against fire");
  });

  it("Should output not enough args message", function () {
    var output = pokeFunc.calcMatchup("fire");
    assert.equal(output, "Invalid number of arguments");
  });

  it("Should output help message", function () {
    var output = pokeFunc.calcMatchup("");
    assert.equal(output, "Enter an attacking type and defending type.\neg: !pokemontype fire water");
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