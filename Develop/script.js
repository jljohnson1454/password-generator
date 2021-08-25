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

    var promptLower = confirm("Will the password include Lowercase characters? Please press OK or Cancel");
    if (promptLower == true) {
      passLower = ["abcdefghijklmnopqrstuvwxyz"];
      console.log(passLower);
    }


    var promptUpper = confirm("Will the password include Uppercase characters? Please press OK or Cancel");
    if (promptUpper == true) {
      passUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    }


    var promptNumber = confirm("Will the password include Numbers? Please press OK or Cancel");
    if (promptNumber == true) {
      passNumber = [1234567890];
    }


    var promptSpecial = confirm("Will the password include Special characters (i.e. !@#$%)? Please press OK or Cancel");
    if (promptSpecial = true) {
      passSpecial = ["!@#$%^&*()_+;:<>.,/\|-="]
      console.log (passSpecial);
    }
  
}





function generatePassword() {




  passwordCriteria();
 
  //put all the functions in generatePassword
  return ;
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


