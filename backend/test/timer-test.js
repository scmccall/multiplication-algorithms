let expect = require('chai').expect;
let timer = require('../assets/timer');

describe("timer.js", () => {
  describe("Returns time for function", () => {
    it("returns an array of size 2", () => {
      let arrayResult = timer.multiplyWithTimer(3, 4, 'test');

      expect(arrayResult.length).to.equal(2);
    });
    it("returns product in first index of the array", () => {
      let multExpression = timer.multiplyWithTimer(9, 8, 'test');

      expect(multExpression[0]).to.equal(72);
    });
    it("returns the time taken to calculate in the second index", () => {
      let timeTest = timer.multiplyWithTimer(8, 4, 'test');

      expect(timeTest[1].length).to.equal(2);
    });
  });
});