const traditionalMethod = function(a, b) {
  let sum = 0;
  for (i=0; i < a.length; i++) {
    for (j=0; j < b.length; j++) {
      let productString = (a[i] * b[j])
      let add0String = "0".repeat(((a.length -i) -1) + ((b.length -j) -1));
      // console.log(`a[i], b[j] = ${a[i]}, ${b[j]}`);
      // console.log(`productString = ${productString}`);
      // console.log(`(((a.length -i) -1) + ((a.length -i) -1)) = ${(((a.length -i) -1) + ((b.length -j) -1))}`);
      // console.log(`add0String = ${add0String}`);
      // console.log(`productString + add0String = ${productString + add0String}`);
      sum += Number(productString + add0String);
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