const algorithms = require('./algorithms');

// a, b : Number
// method : String
const multiplyWithMethod = function(a, b, method) {
  let totalIsNegative = false;
  if (this.isNegative(a)) {
    totalIsNegative = !totalIsNegative;
    a = Math.abs(a);
  }
  if (this.isNegative(b)) {
    totalIsNegative = !totalIsNegative;
    b = Math.abs(b);
  } 

  a = convertNumberToArray(a);
  b = convertNumberToArray(b);

  let sum = multiplicationMethodCaller(a, b, method);
  // console.log(`sum= ${sum}`);
  return (totalIsNegative) ? (-sum) : sum
};

const convertNumberToArray = function(number) {
  return Array.from(String(number), Number);
};

const convertArrayToNumber = function(array) {
  return Number(array.join(''));
};

const isNegative = function(number) {
  return (number < 0) ? true : false;
};

const multiplicationMethodCaller = function(a, b, method) {
  if (method == "traditional") {
    return algorithms.traditionalMethod(a, b)
  };
  if (method == "test") {
    return algorithms.testMethod(a, b);
  };
};

module.exports = { 
  multiplyWithMethod,
  convertNumberToArray,
  convertArrayToNumber,
  isNegative,
  multiplicationMethodCaller,
 };