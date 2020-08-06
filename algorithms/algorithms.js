const traditionalMethod = function(a, b) {
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
  let sum = 0;
  for (i=0; i < a.length; i++) {
    for (j=0; j < b.length; j++) {
      // console.log(`a[i] = ${a[i]}`);
      // console.log(`b[j] = ${b[j]}`);
      let productString = (a[i] * b[j])
      // console.log(`productString = ${productString}`);
      sum += Number(productString);
    }
  }
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

module.exports = { 
  traditionalMethod,
  convertNumberToArray,
  convertArrayToNumber,
  isNegative,
 };