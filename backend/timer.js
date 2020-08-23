const multiplier = require('./multiplier/multiplier');

const multiplyWithTimer = function(a, b, method) {
  let time = process.hrtime();
  let product = multiplier.multiplyWithMethod(a, b, method);
  time = process.hrtime(time);
  return [product, time]
};

module.exports = {
  multiplyWithTimer
}