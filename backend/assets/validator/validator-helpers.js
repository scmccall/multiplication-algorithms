module.exports = {

  errorIfNotOneInput : (...args) => {
    if (args.length < 1) {
      return "No input detected. Please enter a positive integer.";
    } else if (args.length > 1) {
      return "Too many inputs detected. "
              + "Please enter ONE (1) positive integer.";
    } else {
      return true
    }
  },

  removeCommasFromString : (string) => {
    return string.replace(/,/g,'');
  },

  convertStringToNumber: (string) => {
    return parseFloat(string);
  },

  errorIfNotNumber : (notNumber) => {
    if (typeof(notNumber) != "number") {
      return `${notNumber} is not a valid entry. `
              + "Please enter a positive integer."
    } else {
      return true
    }
  },

  errorIfNegative : (negativeNumber) => {
    if (negativeNumber < 0) {
      return "Currently this program only accepts whole positive integers. "
            + "Please remove any input with a decimal point."
    } else {
      return true
    }
  },

  errorWhenInputIsFloat : (float) => {
    // console.log(`float % 1 = ${float % 1}`);
    // if (float.includes('.')) {
    if (float % 1 != 0) {
      return "Currently this program only accepts whole positive integers. "
            + "Please remove any input with a decimal point."
    } else {
      return true
    }
  },

  removeDecimalFromInt : (int) => {
    return Math.trunc(int);
  }
  
}