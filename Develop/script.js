// Assignment code here

//Welcome Alert
alert("Welcome to Password Generator!");
alert("Please click 'Generate Password' for Password Criteria");

var passLength = null;


//First prompt: Password Length
function passwordLength() {
  var promptLength = prompt("Please enter a password length between 8 and 128 characters");

    if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128 || promptLength % 1 != 0 || Number(promptLength) === NaN) {
    window.alert("You need to provide a valid entry! Please try again.");
    return passwordLength();
    }
    else{
      passLength = promptLength;
    }
  
}


//Second Prompt: Password Lower Case
function passwordLower() {
  var promptLower = confirm("Will the password include Lowercase characters? Please press OK or Cancel");


}


//Second Prompt: Password UpperCase
function passwordUpper() {
  var promptUpper = confirm("Will the password include Uppercase characters? Please press OK or Cancel");

}


//Third Prompt: Password Number?
function passwordNumber() {
  var promptNumber = confirm("Will the password include Numbers? Please press OK or Cancel");
}

//Fourth Prompt: Special Characters
function passwordSpecial() {
  var promptSpecial = confirm("Will the password include Special characters (i.e. !@#$%)? Please press OK or Cancel");


}

function generatePassword() {




  passwordLength();
  passwordLower();
  passwordUpper();
  passwordNumber();
  passwordSpecial();
  //put all the functions in generatePassword
  return "Hello";
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



  // var promptLength = prompt("Please enter a password length between 8 and 128 characters")
  // var promptLower = prompt("Will the password include Lowercase characters? Please enter 'Yes' , 'No'");
  // var promptUpper = prompt("Will the password include Uppercase characters? Please enter 'Yes' or 'No'")
  // var promptNumbers = prompt("Will the password include numbers? Please enter 'Yes or 'No'");
  // var promptSpecial = prompt("Will the password include special characters? Please enter 'Yes' or 'No'")
  