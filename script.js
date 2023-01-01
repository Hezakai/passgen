// Assignment Code
// arrays for user selectable password options
const lettersUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lettersLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ['"', " ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{" , "|", "}", "~"];

//init password, array and object
var passArr = [];
var passObj = {};
var passWord = [];

// builds password object based on user responses
function passParams() {
  passObj.count = prompt("How many chars?");

  if (passObj.count < 8 || passObj.count > 128 ) {
  alert("Incorrect");
  passParams();
    } else {
      passObj.upper = confirm("Tall Letters?");
      passObj.lower = confirm("Small Letters?");
      passObj.nums = confirm("Numbers?");
      passObj.specChar = confirm("Wingdings?");
      buildPass();
      }
}

//build password array based on user selections
function buildPass() {
  if (passObj.upper == true) {
    passArr = passArr.concat(lettersUp);
  }
  if (passObj.lower == true) {
    passArr = passArr.concat(lettersLo);
  }
  if (passObj.nums == true) {
    passArr = passArr.concat(numbers);
  }
  if (passObj.specChar == true) {
    passArr = passArr.concat(special);
  }
  passSelect()
}

passParams()

//selects random components of the password array to make passWord 
function passSelect() {
  for (let i = 0; i < passObj.count; i++) {
    passWord.push(passArr[Math.floor(Math.random() * passArr.length)])
  }
}

//check password against criteria

//
function passCheck() {
  if (passObj.upper == true) {
    console.log("yes!")
  } else {console.log("no!")}
}


console.log(passObj);
console.log(passArr);
console.log(passObj.count);
console.log(passWord);

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password
//   alert("Test");

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

