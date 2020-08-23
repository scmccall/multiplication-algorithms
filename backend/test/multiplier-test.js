let expect = require('chai').expect;
let multiplier = require('../assets/multiplier/multiplier');

describe("multiplier.js", () => {
  describe("Helper functions all work as intended", () => {
    it("Converts a Number into an array of its digits", () => {
      let singleDigit = multiplier.convertNumberToArray(4);
      let singleDigitAgain = multiplier.convertNumberToArray(0);
      let multiDigit = multiplier.convertNumberToArray(95);
      let bigNumber = multiplier.convertNumberToArray(189364872);

      expect(JSON.stringify(singleDigit)).to.equal(JSON.stringify([4]));
      expect(JSON.stringify(singleDigitAgain)).to.equal(JSON.stringify([0]));
      expect(JSON.stringify(multiDigit)).to.equal(JSON.stringify([9, 5]));
      expect(JSON.stringify(bigNumber)).to.equal(JSON.stringify(
        [1, 8, 9, 3, 6, 4, 8, 7, 2]));
    });

    it("Converts an array of digits into a Number", () => {
      let singleItemArray = multiplier.convertArrayToNumber([4]);
      let multiItemArray = multiplier.convertArrayToNumber([9, 5, 4, 6]);
      let bigArray = multiplier.convertArrayToNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

      expect(singleItemArray).to.equal(4);
      expect(multiItemArray).to.equal(9546);
      expect(bigArray).to.equal(1234567890);
    });
    it("Determines if a number is negative", () => {
      let negNumber = multiplier.isNegative(-4);
      let posNumber = multiplier.isNegative(4);

      expect(negNumber).to.equal(true);
      expect(posNumber).to.equal(false);
    });
    it("Calls the correct multiplication method", () => {
      let traditionalMethod = 
        multiplier.multiplicationMethodCaller([3], [4], "traditional");
      let testMethod =
      multiplier.multiplicationMethodCaller([3], [4], "test");

      expect(traditionalMethod).to.equal(12);
      expect(testMethod).to.equal(12);
    });
  });
  describe("Uses all the helper functions properly", () => {
    it("uses testMethod to multiply single digits", () => {
      let singleDigit = multiplier.multiplyWithMethod(3, 4, 'test');

      expect(singleDigit).to.equal(12);
    });
    it("uses isNegative() to implement negative multiplication", () => {
      let oneNegative = multiplier.multiplyWithMethod(5, -5, 'test');
      let oneNegativeAgain = multiplier.multiplyWithMethod(-5, 5, 'test');
      let twoNegatives = multiplier.multiplyWithMethod(-5, -5, 'test');
      let noNegatives = multiplier.multiplyWithMethod(5, 5, 'test');

      expect(oneNegative).to.equal(-25);
      expect(oneNegativeAgain).to.equal(-25);
      expect(twoNegatives).to.equal(25);
      expect(noNegatives).to.equal(25);
    });
    it("uses testMethod to multiply large numbers", () => {
      let largeMult = multiplier.multiplyWithMethod(34283, 1983249, 'test');
      
      expect(largeMult).to.equal(67991725467)
    });
  });
});