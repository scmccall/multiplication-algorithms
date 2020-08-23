const traditionalMethod = function(a, b) {
  let sum = 0;
  for (i=0; i < a.length; i++) {
    for (j=0; j < b.length; j++) {
      let productString = (a[i] * b[j])
      let add0String = "0".repeat(((a.length -i) -1) + ((b.length -j) -1));
      sum += Number(productString + add0String);
    };
  };
  return sum;
};

const karatsubaMethod = function(a, b) {
  console.log(`a = ${a} || b = ${b}`);
  if ((a < 10) && (b < 10)) {
    console.log(`multiplying ${a} * ${b} for return of ${a * b}`);
    return a * b;
  } else {

    // Basic Karatsuba logic
    // a = a_tens * 10^(tensPlaces - 1) + a_remainder

    // Find the highest power of 10 in a, b
    const aTensPlaces = Math.floor(Math.log10(a)) + 1;
    const bTensPlaces = Math.floor(Math.log10(b)) + 1;

    const tensPlaces = Math.max(aTensPlaces, bTensPlaces);

    // Split the large numbers in half
    const halfTensPlaces = Math.ceil(tensPlaces / 2)

    console.log(`tensPlaces = ${tensPlaces}`);
    console.log(`halfTensPlaces = ${halfTensPlaces}`);

    const a_tens = Math.floor(a / Math.pow(10, halfTensPlaces));
    const a_remainder = a % Math.pow(10, halfTensPlaces);
    const b_tens = Math.floor(b / Math.pow(10, halfTensPlaces));
    const b_remainder = b % Math.pow(10, halfTensPlaces);

    console.log(`a_tens = ${a_tens}`);
    console.log(`a_remainder = ${a_remainder}`);
    console.log(`b_tens = ${b_tens}`);
    console.log(`b_remainder = ${b_remainder}`);

    // Divide into 3 sub-problems
    const tensProduct = karatsubaMethod(a_tens, b_tens);
    const remainderProduct = karatsubaMethod(a_remainder, b_remainder);
    const crossProduct = karatsubaMethod(a_tens + a_remainder, b_tens + b_remainder) - tensProduct - remainderProduct;

    console.log(`tensProduct = ${tensProduct}`);
    console.log(`crossProduct = ${crossProduct}`);
    console.log(`remainderProduct = ${remainderProduct}`);

    let product = 0

    product += tensProduct * Math.pow(10, halfTensPlaces * 2)
    product += crossProduct * Math.pow(10, halfTensPlaces);
    product += remainderProduct;

    return product
  };
}


const testMethod = function(a, b) {
  return (a * b);
}

module.exports = {
  traditionalMethod,
  karatsubaMethod,
  testMethod
};