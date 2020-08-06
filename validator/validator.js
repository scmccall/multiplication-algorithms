let helper = require('./validator-helpers');

module.exports = {

  inputValidator : (...someInput) => {
    // console.log(`someInput = ${someInput}`);
    if (helper.errorIfNotOneInput(...someInput) != true) {
      return helper.errorIfNotOneInput(...someInput);
    };

    // ...someInput is an array of one String, and we want to return the string
    // instead of an Object for the other helper functions to work
    const oneInput = someInput[0];

    const oneNum = helper.convertStringToNumber(oneInput);

    // console.log(`oneNum = ${oneNum}`);
    // console.log(`typeof(oneNum) = ${typeof(oneNum)}`);

    if (helper.errorIfNotNumber(oneNum) != true) {
      return helper.errorIfNotNumber(oneNum);
    };

    if (helper.errorIfNegative(oneNum) != true) {
      return helper.errorIfNegative(oneNum);
    };

    if (helper.errorWhenInputIsFloat(oneNum) != true) {
      return helper.errorWhenInputIsFloat(oneNum);
    };

    const noDecimalNum = helper.removeDecimalFromInt(oneNum);
    const noCommaNum = helper.removeCommasFromString(noDecimalNum);
    const finalNum = helper.convertStringToNumber(noCommaNum);
    return finalNum;
  }

}