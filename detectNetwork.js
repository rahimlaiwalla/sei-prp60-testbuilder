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
  var first3 = Number(cardNumber.slice(0,3))
  var first4 = cardNumber.slice(0,4)
  var numFirst4 = Number(first4)
  var first6 = Number(cardNumber.slice(0,6))
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
  } else if(firstTwoDigits === '65' || first4 === '6011'){
    digitName = 'Discover'
  } else if(first4 === "5018" || first4 === "5020" || first4 === "5038" || first4 === "6304"){
    digitName = "Maestro"
  }
  
  for(var i = 644; i<=649; i++){
    if(first3 === i){
      digitName = 'Discover'
    }
  }
  
  
//   console.log(digitName)

  // Test for length
  
  if(firstTwoDigits === '65' && cardNumber.length === 19){
    lengthName = 'Discover'
  } else if(firstTwoDigits === '65' && cardNumber.length === 16){
    lengthName = 'Discover'
  } else if(first4 === '6011' && cardNumber.length === 19){
    lengthName = 'Discover'
  } else if(cardNumber[0] === '4' && cardNumber.length === 16){
    lengthName = 'Visa'
  } else if(first4 === '6011' && cardNumber.length === 16){
    lengthName = 'Discover'
  } else if(cardNumber.length === 14){
    lengthName = "Diner\'s Club"
  } else if(cardNumber.length === 15){
    lengthName = "American Express"
  } else if(cardNumber.length === 13 || cardNumber.length === 19){
    lengthName = 'Visa'
  } else if(cardNumber.length === 16){
    lengthName = 'MasterCard'
  }

  for(var i = 644; i<=649; i++){
    if(first3 === i && cardNumber.length === 16){
      lengthName = 'Discover'
      //console.log("16" + lengthName)
    } else if(first3 === i && cardNumber.length === 19){
      lengthName = 'Discover'
      //console.log(19 + lengthName)
    }
  }

  for(var i = 12; i<=19; i++){
    if(first4 === '5018' && cardNumber.length === i){
      lengthName = "Maestro"
    } else if(first4 === '5020' && cardNumber.length === i){
      lengthName = "Maestro"
    } else if(first4 === '5038' && cardNumber.length === i){
      lengthName = "Maestro"
    } else if(first4 === '6304' && cardNumber.length === i){
      lengthName = "Maestro"
    } 
  }  

  //China UnionPay(combining both tests)
  for(var i = 624; i<=626; i++){
    for(var j = 16; j<= 19; j++){
      if(first3 === i && cardNumber.length === j){
        digitName = 'China UnionPay'
        lengthName = 'China UnionPay'
      }
    }
  }
  for(var i = 6282; i<=6288; i++){
    for(var j = 16; j<= 19; j++){
      if(numFirst4 === i && cardNumber.length === j){
        digitName = 'China UnionPay'
        lengthName = 'China UnionPay'
      }
    }
  }

  for(var i = 622126; i<=622925; i++){
    for(var j = 16; j<= 19; j++){
      if(first6 === i && cardNumber.length === j){
        digitName = 'China UnionPay'
        lengthName = 'China UnionPay'
      }
    }
  }
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var arraySwitch = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759]
  arraySwitch.forEach(function(prefix){
    if(prefix === numFirst4 && cardNumber.length === 16){
      digitName = 'Switch'
      lengthName = 'Switch'
    } else if(prefix === numFirst4 && cardNumber.length === 18){
      digitName = 'Switch'
      lengthName = 'Switch'
    } else if(prefix === numFirst4 && cardNumber.length === 19){
      digitName = 'Switch'
      lengthName = 'Switch'
    }else if(prefix === first6 && cardNumber.length === 16){
       digitName = 'Switch'
      lengthName = 'Switch'
    } else if(prefix === first6 && cardNumber.length === 18){
      digitName = 'Switch'
      lengthName = 'Switch'
    } else if(prefix === first6 && cardNumber.length === 19){
      digitName = 'Switch'
      lengthName = 'Switch'
    }
  })

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
  } else if(digitName === "Maestro" && lengthName === "Maestro"){
    return "Maestro"
  } else if(digitName === 'China UnionPay' && lengthName === 'China UnionPay'){
    return 'China UnionPay'
  } else if(digitName === 'Switch' && lengthName === 'Switch'){
    return 'Switch'
  }
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


