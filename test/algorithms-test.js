let expect = require('chai').expect;
let multiply = require('../algorithms/algorithms');

describe("Multiplication Algorithms", () => {
  describe("Method: Traditional", () => {
    describe("Helper functions", () => {
      it("Converts a Number into an array of its digits", () => {
        let singleDigit = multiply.convertNumberToArray(4);
        let singleDigitAgain = multiply.convertNumberToArray(0);
        let multiDigit = multiply.convertNumberToArray(95);
        let bigNumber = multiply.convertNumberToArray(189364872);

        expect(JSON.stringify(singleDigit)).to.equal(JSON.stringify([4]));
        expect(JSON.stringify(singleDigitAgain)).to.equal(JSON.stringify([0]));
        expect(JSON.stringify(multiDigit)).to.equal(JSON.stringify([9, 5]));
        expect(JSON.stringify(bigNumber)).to.equal(JSON.stringify(
          [1, 8, 9, 3, 6, 4, 8, 7, 2]));
      });

      it("Converts an array of digits into a Number", () => {
        let singleItemArray = multiply.convertArrayToNumber([4]);
        let multiItemArray = multiply.convertArrayToNumber([9, 5, 4, 6]);
        let bigArray = multiply.convertArrayToNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

        expect(singleItemArray).to.equal(4);
        expect(multiItemArray).to.equal(9546);
        expect(bigArray).to.equal(1234567890);
      });
      it("Determines if a number is negative", () => {
        let negNumber = multiply.isNegative(-4);
        let posNumber = multiply.isNegative(4);

        expect(negNumber).to.equal(true);
        expect(posNumber).to.equal(false);
      });
    });
    describe.only("Single digit multiplication", () => {

      it("Multiplies single digit positive numbers", () => {
        let singlePositiveDigits = multiply.traditionalMethod(3, 4);
        expect(singlePositiveDigits).to.equal(12);
      });

      it("Multiplies single digit negative numbers", () => {
        let singleNegativeDigits = multiply.traditionalMethod(-5, -9);
        expect(singleNegativeDigits).to.equal(45);
      });

      it("Multiplies single digit positive and negative numbers", () => {
        let mixedSingleDigits = multiply.traditionalMethod(-1, 8);
        expect(mixedSingleDigits).to.equal(-8);
      });
    });
    
    describe("Multi-digit multiplication", () => {
      it("Multiplies positive 2-digit numbers", () => {
        let twoDigitNumbers = multiply.traditionalMethod(10, 12);
        expect(twoDigitNumbers).to.equal(120);
      });
    });
  });
});