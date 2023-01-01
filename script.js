// Assignment Code
// arrays for user selectable password options
const lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersLo = lettersUp.toLocaleLowerCase();
const numbers = "0123456789";
const special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// console tests
console.log(lettersLo);
alert(lettersLo);
console.log(special);
alert(special);



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Test")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
