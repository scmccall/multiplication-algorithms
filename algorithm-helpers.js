module.exports = {

  errorIfNotOneInput : (...args) => {
    if (args.length < 1) {
      return "No input detected. Please enter a positive integer.";
    } else if (args.length > 1) {
      return "Too many inputs detected. Please enter ONE (1) positive integer.";
    } else {
      return true
    }
  },

  errorIfNotNumber : (notNumber) => {
    if (typeof(notNumber) != "number") {
      return `${notNumber} is not a valid entry. Please enter a positive integer.`;
    } else {
      return true
    }
  },

  errorIfNegative : (negativeNumber) => {
    if (negativeNumber < 0) {
      return `${negativeNumber} is not a valid entry. Please enter a positive integer.`
    } else {
      return true
    }
  },




}

