const traditionalMethod = function(a, b) {
  let sum = 0;
  for (i=0; i < a.length; i++) {
    for (j=0; j < b.length; j++) {
      let productString = (a[i] * b[j])
      sum += Number(productString);
    };
  };
  return sum;
};

const testMethod = function(a, b) {
  a = Number(a.join(''));
  b = Number(b.join(''));
  return (a * b);
}

module.exports = {
  traditionalMethod,
  testMethod
};