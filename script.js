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
  var passwordGen = "";
var charGen = charType.toLowerCase;
if (charGen = "uppercase") {
passwordGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else if (charGen = "lowercase") {
  passwordGen = "abcdefghijklmnopqrstuvwxyz";
} else if (charGen = "numbers") {
  passwordGen = "0123456789";
} else if (charGen = "symbols") {
  passwordGen = "!@#$%^&*()-_=+";
} else {
  window.alert("Please type criteria for your new password!");
}
  passwordText.value = password;
var password = generatePassword();

//picking values out of the strings
generatePassword: function () {
var pick = "";
for (i = 0; i < length; i++) {
 pick += passwordGen.charAt(Math.floor(Math.random() * length));
}
return pick;
}

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
