module.exports = {

  errorIfNotNumber : (notNumber) => {
    if (typeof(notNumber) != "number") {
      return `${notNumber} is not a valid entry. Please enter a positive integer`
    } else {
      return true
    }
  },

  errorIfNegative : (negativeNumber) => {
    if (negativeNumber < 0) {
      return `${negativeNumber} is not a valid entry. Please enter a positive integer`
    } else {
      return true
    }
  },



  
}