


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

var charTypes = charType.toLowerCase().split(', ');

var charSet = "";
for(var i=0; i < charTypes.length; i++) {
  charSet += charGen[charTypes[i]];
}

var retVal = "";
for (var i = 0; i < length; i++) {
 retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
}
return retVal;
  }

passwordText.value = password();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("password").onclick = function() {
  var getPass = document.getElementById("password").value;
  copyTextToClipboard(getPass);
}

async function copyTextToClipboard(getPass) {
  try {
      await navigator.clipboard.writeText(getPass);
      alert('Text copied to clipboard');
  } catch (err) {
      console.error('Error in copying text: ', err);
  }
}
/*
function copyPassword() {
  var copyPass = document.getElementById("password");
  copyPass.select();
  copyPass.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPass.value);
  alert("Password copied to clipboard!");
}
*/