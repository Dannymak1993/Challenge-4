// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // add code here
  // Need the following variables:
    // selected length of the password
    // array of lowercase letters
    // array of uppercase letters
    // array of numbers
    // array of special characters
    // to hold the password we're building
    // possibly the mega-array

  // prompt for password length --> stored in a variable
  // validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then theyre going to need to restart OR call the function that prompts for length again
  // prompt --> Do they want uppercase letters?
  // prompt --> Do they want lowercase letters?
  // prompt --> Do they want numbers?
  // prompt --> Do they want special characters?
 // Validate that the user has chosen at least one character set --> if not, either start over or recursively call the function that prompts for the character sets

  // With each of those prompts, you need an array of those character types
    // Make sure theres at least one of each selected character type included in the password
    // randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push () for an array or .concat() for a string)
    // for loop:
      // for (var i = password.length - 1; i < passwordLength; i++)
    // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
      // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
      // IF pushing to a mega-array randomly generate a number to pull a character from the array
      // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
 // return the generated password
  

  
  return UserPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```