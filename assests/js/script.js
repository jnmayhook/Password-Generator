// Password length
var characterLength = 8;

// Array of special characters, lowercase letters, uppercase letters, and numbers to be included in password
var specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '(', ')', '[', ']', '/', '|', '?', '<', '>'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate function password that prompts the User to select how many and which character types for their password
function generatePassword() {

  var finalPassword = "";

  var userPasswordSize = prompt("How many characters would you like in your password?");

  if (userPasswordSize >= 8 && userPasswordSize <= 128) {
    var isLowerCase = confirm("Do you want lowercase characters in your password?");
    var isUpperCase = confirm("Do you want uppercase characters in your password?");
    var isSpecialCase = confirm("Do you want special characters in your password?");
    var isNumberCase = confirm("Do you want number characters in your password?");
      {
        if (isLowerCase + isUpperCase + isSpecialCase + isNumberCase === 0) {
          alert("You must include a type of character.");
        }
      }

    //For loop to iterate the password size and randomize the characters chosen
    for (var i = 0; i < userPasswordSize; i++) {
      if (isLowerCase && finalPassword.length<userPasswordSize) {
        var index = Math.floor(Math.random() * lowerCaseArray.length);
        finalPassword = finalPassword + lowerCaseArray[index];
      }
      if (isUpperCase && finalPassword.length<userPasswordSize) {
        var index = Math.floor(Math.random() * upperCaseArray.length);
        finalPassword = finalPassword + upperCaseArray[index];
      }
      if (isSpecialCase && finalPassword.length<userPasswordSize) {
        var index = Math.floor(Math.random() * specialCharactersArray.length);
        finalPassword = finalPassword + specialCharactersArray[index];
      }
      if (isNumberCase && finalPassword.length<userPasswordSize) {
        var index = Math.floor(Math.random() * numbersArray.length);
        finalPassword = finalPassword + numbersArray[index];
      }
    }
  }
  
  // 
  else {
    alert("Invalid entry, password entry must be between 8 and 128.");
  }
  return finalPassword;
}