var generateBtn = document.querySelector("#generate");

function writePassword() {
  //Building the character base...
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "1234567890";
  var symbol = "!@#$%^&*()";

  // Determine password length
  var passLength = prompt("Between 8-128, how many characters would you like your password to be? ");

// validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then theyre going to need to restart OR call the function that prompts for length again

if (passLength  < 8 || passLength > 128 ) {
  window.alert("please choose valid length")
  return;
}
// can also use passwordlength = parseint(passwordlength) instead of 
// if (passLength  < 8 || passLength > 128 ) {
// window.alert("please choose valid length")
// return;
// }

// passLength = "";

  // Determine which characters will ultimately go into the character base...
   // prompt --> Do they want uppercase letters?
  var incLowercase = prompt("Would you like to use lowercase letters? ").toLowerCase() === "yes";
  if (incLowercase !== "yes" && incLowercase !== "no") {
   window.alert("please choose yes or no")
   incLowercase = prompt("Would you like to use lowercase letters? ").toLowerCase() === "yes";
  
  }
   // prompt --> Do they want lowercase letters?
  var incUppercase = prompt("Would you like to use uppercase letters? ").toLowerCase() === "yes";
  if (incUppercase !== "yes" && incUppercase !== "no") {
   window.alert("please choose yes or no")
   incUppercase = prompt("Would you like to use uppercase letters? ").toLowerCase() === "yes";
  
  }
    // prompt --> Do they want numbers?
  var incNumbers = prompt("Would you like to use numbers? ").toLowerCase() === "yes";
  if (incNumbers !== "yes" && incNumbers !== "no") {
   window.alert("please choose yes or no")
   incNumbers = prompt("Would you like to use Numbers? ").toLowerCase() === "yes";
  
  }
  // prompt --> Do they want special characters?
  var incSymbol = prompt("Would you like to use special characters? ").toLowerCase() === "yes";
  if (incSymbol !== "yes" && incSymbol !== "no") {
   window.alert("please choose yes or no")
   incSymbol = prompt("Would you like to use Symbols? ").toLowerCase() === "yes";
  
  }

  var buildingPassword = '';
  if (incLowercase) {
    buildingPassword += lowercase;
  }
  if (incUppercase) {
    buildingPassword += uppercase;
  }
  if (incNumbers) {
    buildingPassword += numbers;
  }
  if (incSymbol) {
    buildingPassword += symbol;
  }

  // Check if at least one character type is selected
  if (buildingPassword.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  function generatePassword(length, buildingPassword) {
    let password = '';
    for (let i = 0; i < length; i++) {
      password += buildingPassword.charAt(Math.floor(Math.random() * buildingPassword.length));
    }
    return password;
  }

  let password = generatePassword(passLength, buildingPassword);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
}

generateBtn.addEventListener("click", writePassword);


