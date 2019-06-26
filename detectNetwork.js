// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var firstTwoDigits = cardNumber.slice(0,2)
  var firstFourDigits = cardNumber.slice(0,4)
  var digitName = ''
  var lengthName = ''
  if(firstTwoDigits === '38' || firstTwoDigits === '39'){
    digitName = "Diner\'s Club"
  } else if(firstTwoDigits === '34' || firstTwoDigits === '37'){
    digitName = "American Express"
  } else if(cardNumber[0] === '4'){
    digitName = 'Visa'
  } else if(firstTwoDigits === '51' || firstTwoDigits === '52' ||firstTwoDigits === '53' || firstTwoDigits === '54' || firstTwoDigits === '55'){
    digitName = 'MasterCard'
  } else if(firstFourDigits === '6011'){
    digitName = 'Discover'
  }

  // Test for length
  if(cardNumber.length === 14){
    lengthName = "Diner\'s Club"
  } else if(cardNumber.length === 15){
    lengthName = "American Express"
  } else if(cardNumber.length === 13 || cardNumber.length === 19){
    lengthName = 'Visa'
  } else if(cardNumber[0] === '4' && cardNumber.length === 16){
    lengthName = 'Visa'
  } else if(cardNumber.length === 16){
    lengthName = 'MasterCard'
  } else if(firstFourDigits === '6011' && cardNumber.length === 16){
    lengthName = 'Discover'
  }

  //test for equality
  if(digitName === 'Diner\'s Club' && lengthName === "Diner\'s Club"){
    return "Diner\'s Club"
  } else if(digitName === "American Express" && lengthName === "American Express"){
    return "American Express"
  } else if(digitName === 'Visa' && lengthName === "Visa"){
    return "Visa"
  } else if(digitName === 'MasterCard' && lengthName === "MasterCard"){
    return "MasterCard"
  } else if(digitName === 'Discover' && lengthName === 'Discover'){
    return "Discover"
  }
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


