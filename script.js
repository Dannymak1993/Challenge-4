// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = lowercase.toUpperCase();
  var number = '0123456789';
  var symbol = '!@#$%^&*()';
  var buildingPassword = "";


  //determine password length
  var passLength = prompt("Enter a number from 8 to 128 for password length.");

  // validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then theyre going to need to restart OR call the function that prompts for length again
  
  // prompt --> Do they want uppercase letters?
  var incLowercase = prompt("Would you like to use uppercase letters?").toLowerCase();
  if (incLowercase === "yes" || incLowercase === "y") {
    incLowercase = true;
  } else{
    incLowercase = false;
  }
    // prompt --> Do they want lowercase letters?
  var incUppercase = prompt("Would you like to use lowercase letters?").toLowerCase();
  if (incUppercase === "yes" || incUppercase === "y") {
    incUppercase = true;
  } else{
    incUppercase = false;
  }
    // prompt --> Do they want numbers?
  var incNumbers = prompt("Would you like to include numbers?").toLowerCase();
  if (incNumbers === "yes" || incNumbers === "y") {
    incNumbers = true;
  } else {
    incNumbers = false;
  }
    // prompt --> Do they want special characters?
  var incSymbol = prompt("Would you like to include symbols?").toLowerCase();
  if (incSymbol === "yes" || incSymbol === "y") {
    incSymbol = true;
  }else{
    incSymbol = false;
  }

  if (incLowercase) {
    buildingPassword += incLowercase;
  }
  if (incUppercase){
    buildingPassword += incUppercase;
  }
  if (incNumbers){
    buildingPassword += incNumbers;
  }
  if (incSymbol){
    buildingPassword += incSymbol;
  }

  
}

  function generatePassword(){
    var password = "";
    for (let i = 0; i < passLength.length; i++) {
      password += buildingPassword.charAt(Math.floor(Math.random() * buildingPassword.length));
      console.log(password)
  }

  // add code here
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
  return password;
  // prompt for password length --> stored in a variable
 // Validate that the user has chosen at least one character set --> if not, either start over or recursively call the function that prompts for the character sets



//console.log(writePassword());

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
