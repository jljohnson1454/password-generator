// Assignment code here

//Welcome Alert
alert("Welcome to Password Generator!");
alert("Please click 'Generate Password' for Password Criteria");

lower = String.fromCharCode(97, 122);
upper = String.fromCharCode(65, 90);
special = String.fromCharCode(33, 47, 58, 64);
number = String.fromCharCode(48,57);



var passLength = null;
var passLower = null;
var passUpper = null;
var passNumber = null;
var passSpecial = null;

var pwdArray = [];

var passwordRandom = [];


//First prompt: Password Length
function passwordCriteria() {
  
  var promptLength = prompt("Please enter a password length between 8 and 128 characters");
    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128 || promptLength % 1 != 0 || Number(promptLength) === NaN) {
    window.alert("You need to provide a valid entry! Please try again.");
    return passwordCriteria();
    }
    else{
      passLength = promptLength;
    } 

  var promptLower = confirm("Will the password include Lowercase characters? Please press OK for Yes or Cancel for No");
    if (promptLower == true) {
      passLower = ["a"];
      console.log(passLower);
      pwdArray = pwdArray.concat(passLower);
      console.log(pwdArray);
      // Could use a FOR loop with slice to take out each letter
    }

  var promptUpper = confirm("Will the password include Uppercase characters? Please press OK for Yes or Cancel for No");
    if (promptUpper == true) {
      passUpper = ["A"];
      pwdArray = pwdArray.concat(passUpper);
      console.log(pwdArray);
    }

  var promptNumber = confirm("Will the password include Numbers? Please press OK for Yes or Cancel for No");
    if (promptNumber == true) {
      passNumber = [1234567890];
      pwdArray = pwdArray.concat(passNumber);
      console.log(pwdArray);
    }


  var promptSpecial = confirm("Will the password include Special characters (i.e. !@#$%)? Please press OK for Yes or Cancel for No");
    if (promptSpecial = true) {
      passSpecial = ["!"];
      pwdArray = pwdArray.concat(passSpecial);
      console.log(pwdArray);
    }
  
    for (var i =0; i < passLength; i++) {
      passwordRandom += pwdArray[(Math.floor(Math.random() * pwdArray.length))];
      }
      console.log(pwdArray[0]);
      console.log(pwdArray[1]);
      console.log(pwdArray[2]);
}

function generatePassword() {
  
  passwordCriteria();
 
  return passwordRandom;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


