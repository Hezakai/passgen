// Assignment Code
// arrays for user selectable password options
const lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersLo = lettersUp.toLowerCase();
const numbers = "0123456789";
const special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// creating password object with boolean params
const passObj = {
  count: 0,
  upper: false,
  lower: false,
  nums: false,
  specChar: false,
}

// console tests
// console.log(lettersLo);
// alert(lettersLo);
// console.log(special);
// alert(special);
// console.log(passObj);



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
