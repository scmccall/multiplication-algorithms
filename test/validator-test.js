// test/calidator-test.js

let expect = require('chai').expect;
let helper = require('../algorithm-helpers')

describe("Multiplication algorithm Validator", () => {
  describe("Inputs are valid positive numbers", () => {
    it("throws error if there is not one input", () => {
      let noInput = helper.errorIfNotOneInput();
      let twoInputs = helper.errorIfNotOneInput(1,2);
      let fiveInputs = helper.errorIfNotOneInput(1,2,3,4,5);
      let oneInput = helper.errorIfNotOneInput(1)

      const errorMessage1 = 
        "No input detected. Please enter a positive integer.";
      const errorMessage2 = 
        "Too many inputs detected. Please enter ONE (1) positive integer.";

      expect(noInput).to.equal(errorMessage1)
      expect(twoInputs).to.equal(errorMessage2);
      expect(fiveInputs).to.equal(errorMessage2);
      expect(oneInput).to.equal(true);
    });

    it("removes commas in a string", () => {
      let oneComma = helper.removeCommasFromString("4,000");
      let manyCommas = helper.removeCommasFromString("47,004,869,284,826")
      let allCommas = helper.removeCommasFromString(",,,,,");
      let noCommas = helper.removeCommasFromString("397832");

      expect(oneComma).to.equal("4000");
      expect(manyCommas).to.equal("47004869284826");
      expect(allCommas).to.equal("");
      expect(noCommas).to.equal("397832");
    })

    it("throws error if the input is not a number", () => {
      let stringInput = helper.errorIfNotNumber("String");
      let booleanInput = helper.errorIfNotNumber(false);
      let numberInput = helper.errorIfNotNumber(1);
      let numberWithDecimalPointInput = helper.errorIfNotNumber(34.95)

      const errorMessage = 
        "is not a valid entry. Please enter a positive integer."

      expect(stringInput).to.equal(`String ${errorMessage}`);
      expect(booleanInput).to.equal(`false ${errorMessage}`);
      expect(numberInput).to.equal(true);
      expect(numberWithDecimalPointInput).to.equal(true);
    })

    it("throws an error if input is a negative number", () => {
      let negativeInput = helper.errorIfNegative(-1);
      let anotherNegativeInput = helper.errorIfNegative(-999);

      const errorMessage = 
        "is not a valid entry. Please enter a positive integer."

      expect(negativeInput).to.equal(`-1 ${errorMessage}`);
      expect(anotherNegativeInput).to.equal(`-999 ${errorMessage}`);
    });
  });
  describe("Inputs confirm program limitations", () => {
    it("gives an error when given a float", () => {
      let float = helper.errorWhenInputIsFloat("34.95");
      let fractionFloat = helper.errorWhenInputIsFloat("0.74");
      let wholeNumberFloat = helper.errorWhenInputIsFloat("100.00")
      let noDecimalPoint = helper.errorWhenInputIsFloat("98765");

      const errorMessage = 
        "Currently this program only accepts whole positive integers. Please "
        + "remove any input with a decimal point.";

      expect(float).to.equal(errorMessage);
      expect(fractionFloat).to.equal(errorMessage);
      expect(wholeNumberFloat).to.equal(errorMessage);
      expect(noDecimalPoint).to.equal(true);
    });
  });
});