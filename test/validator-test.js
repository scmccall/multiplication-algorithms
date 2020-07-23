// test/calidator-test.js

let expect = require('chai').expect;
let helper = require('../algorithm-helpers')

describe("Multiplication algorithm Validator", () => {
  describe("Inputs are valid positive numbers", () => {
    it("throws error if the input is not a number", () => {
      let stringInput = helper.errorIfNotNumber("String");
      let booleanInput = helper.errorIfNotNumber(false);
      let numberInput = helper.errorIfNotNumber(1);
      let numberWithDecimalPointInput = helper.errorIfNotNumber(34.95)

      const errorMessage = "is not a valid entry. Please enter a positive integer"

      expect(stringInput).to.equal(`String ${errorMessage}`);
      expect(booleanInput).to.equal(`false ${errorMessage}`);
      expect(numberInput).to.equal(true);
      expect(numberWithDecimalPointInput).to.equal(true);

    })

    it("throws an error if input is a negative number", () => {
      let negativeInput = helper.errorIfNegative(-1);
      let anotherNegativeInput = helper.errorIfNegative(-999);

      const errorMessage = "is not a valid entry. Please enter a positive integer"

      expect(negativeInput).to.equal(`-1 ${errorMessage}`);
      expect(anotherNegativeInput).to.equal(`-999 ${errorMessage}`);
    });
  });
});