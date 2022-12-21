// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  //Length
var length = Number(prompt("Enter the length of your password between 8-128 characters."))
//character types
var charType = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include. ")

  var passwordText = document.querySelector("#password");

  function password() {
var charGen = {
  lowercase: 'abcdefghijklmnop',
  uppercase: 'ABCDEFGHIJKLMNOP',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+',
};

var retVal = "";
for (i = 0; i < length; i++) {
 retVal += charGen.charAt(Math.floor(Math.random() * length));
}
return retVal;
  }

passwordText.value = password();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
