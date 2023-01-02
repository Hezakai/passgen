// Assignment Code
// arrays for user selectable password options
const lettersUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lettersLo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "#", "$", "%", "&","*", "?", "@", "^"];

//init button, password, array and object
var generateBtn = document.querySelector("#generate");
var passArr = [];
let passObj = {};
var passWord = [];

// builds password object based on user responses
function userQuery() {
  passWord = [];
  passObj = {};
  console.log("Cleared on click:", passObj, passWord);
  
  
  passObj.count = prompt("How many chars?");

  if (passObj.count < 8 || passObj.count > 128 ) {
  alert("That number is not between 8 and 128.  Please enter a correct number.");
  userQuery();
    } else if (isNaN(passObj.count)) {
      alert("That is not a number.  Please enter a number between 8 and 128.")
      userQuery();
    }
    else {
      passObj.upper = confirm("Tall Letters?");
      passObj.lower = confirm("Small Letters?");
      passObj.nums = confirm("Numbers?");
      passObj.specChar = confirm("Wingdings?");
      console.log("After Input:", passObj, passWord);
      buildArray();
      }
}

//build password array based on user selections - SUPERFOLOUS REFACTOR LATER
function buildArray() {
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
  passSelect();
  console.log("buildArray:", passObj, passWord);
  //outputs to password field
  document.getElementById("password").innerHTML = passWord.join("");
}

//selects random components of the password array to make passWord 
function passSelect() {
  for (let i = 0; i < passObj.count; i++) {
    passWord.push(passArr[Math.floor(Math.random() * passArr.length)])
  }
}

//compares second array for matching items in first array
function comp(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

//check for selected criteria and if not found reruns selection function and rechecks
function passCheck() {
  if (passObj.upper == true && comp(lettersUp, passWord)) {
    console.log("UPPER MATCH FOUND")
  }
  if (passObj.upper == true && !comp(lettersUp, passWord)) {
    passSelect()
    passCheck()
  }
  if (passObj.lower == true && comp(lettersLo, passWord)) {
    console.log("LOWER MATCH FOUND")
  }
  if (passObj.lower == true && !comp(lettersLo, passWord)) {
    passSelect()
    passCheck()
  }
  if (passObj.nums == true && comp(numbers, passWord)) {
    console.log("NUMBER MATCH FOUND")
  }
  if (passObj.nums == true && !comp(numbers, passWord)) {
    passSelect()
    passCheck()
  }
  if (passObj.specChar == true && comp(special, passWord)) {
    console.log("SPECIAL MATCH FOUND")
  }
  if (passObj.specChar == true && !comp(special, passWord)) {
    passSelect()
    passCheck()
  }
}

//starts the query on click
generateBtn.addEventListener("click", userQuery);
