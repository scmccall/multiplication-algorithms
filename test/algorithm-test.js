let expect = require('chai').expect;
let multiplierTool = require('../multiplier/multiplier');
let multiply = multiplierTool.multiplyWithMethod

describe("Multiplication Algorithm Testing", () => {
  describe("Traditional Algorithm", () => {
    it("Multiplies single-digit (+) numbers", () => {
      let singleDigitPositive = multiply(3, 4, 'traditional');

      expect(singleDigitPositive).to.equal(12);
    });
    it("Multiplies single-digit (-) numbers", () => {
      let singleDigitNegative = multiply(-9, -8, 'traditional');

      expect(singleDigitNegative).to.equal(72);
    });
    it("Multiplies single-digit (+) against (-) numbers", () => {
      let singleDigitPositiveAndNegative = multiply(9, -5, 'traditional');

      expect(singleDigitPositiveAndNegative).to.equal(-45);
    });
    it("Multiplies 2-digit numbers against each other", () => {
      let twoDigitNumbers = multiply(12, 20, 'traditional');

      expect(twoDigitNumbers).to.equal(240);
    });
    it("Multiplies numbers of different digit lengths", () => {
      let example1 = multiply(1, 7263, 'traditional');
      let example2 = multiply(1289, 886, 'traditional');

      expect(example1).to.equal(7263)
      expect(example2).to.equal(1142054);
    });
    it("Multiplies large numbers of (+) and(-) with different lengths", () => {
      let example1 = multiply(-86, 2187, 'traditional');
      let example2 = multiply(-44, -332, 'traditional');
      let numberIsZero = multiply(0, -99999999, 'traditional');

      expect(example1).to.equal(-188082);
      expect(example2).to.equal(14608);
      expect(numberIsZero).to.equal(0);
    });
  });
});