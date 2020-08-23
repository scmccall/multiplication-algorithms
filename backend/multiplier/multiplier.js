const algorithms = require('./algorithms');

const multiplyWithTime = function(a, b, method) {
  let time = process.hrtime();
  let product = multiplyWithMethod(a, b, method);
  time = process.hrtime(time);
  return [product, time]
};

// a, b : Number
// method : String
const multiplyWithMethod = function(a, b, method) {
  let totalIsNegative = false;
  if (isNegative(a)) {
    totalIsNegative = !totalIsNegative;
    a = Math.abs(a);
  }
  if (isNegative(b)) {
    totalIsNegative = !totalIsNegative;
    b = Math.abs(b);
  }

  const sum = multiplicationMethodCaller(a, b, method)
  
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
    a = convertNumberToArray(a);
    b = convertNumberToArray(b);
    return algorithms.traditionalMethod(a, b)
  };
  if (method == 'karatsuba') {
    return algorithms.karatsubaMethod(a, b);
  }
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