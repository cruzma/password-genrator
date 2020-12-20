// Assignment code here
var generatePassword = function(){
  
  var charString = "";
  var retVal = "";
  
  
  var passLength = window.prompt("How long would you like your password to be?(Choose a number between 8 and 128");
  
  passLength = parseInt(passLength);
  debugger;
  
  // will check if number entered is between 8 and 128 and will continue to loop unitl criteria met
  
  while(passLength < 8 || passLength > 128){
    alert("Your number must be between 8 and 128 characters");
    passLength = window.prompt("How long would you like your password to be?(Choose a number between 8 and 128");
    passLength = parseInt(passLength);
  }
  
  
  var upperCase = window.confirm("Do you want to use Uppercase characters? ");
  
  var lowerCase = window.confirm("Do you want to use Lowercase characters?");
  
  
  // will validate if atleast uppercase or lower case option was chosen or both and will continue to loop until criteria met.
  
  while(upperCase === false && lowerCase === false){
    alert("you must choose either upper or lower case characters, or both.");
    
  
    upperCase = window.confirm("Do you want to use Uppercase characters? ");
  
    lowerCase = window.confirm("Do you want to use Lowercase characters?");
  }
  
  var specialChar = window.confirm("Do you want to use special characters?");
  
  var numChar = window.confirm("Do you want to use Numeric Characters?");
  
  //will check if special character option is true and upper case is true then return random values
  
  if(specialChar === true && upperCase === true && lowerCase === false && numChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
      
    }
  }
  
  // will check if upperCase is true and numeric value is true then store random values
  
  if(upperCase === true && numChar === true && lowerCase === false && specialChar === false){
        for(var i = 0; i < passLength; i++){
      charString += "0123456789";
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
      
    }
  }
  
  //will check if just upperCase is true then store random value
  
  if(upperCase === true && lowerCase === false && numChar === false && specialChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  //will check if special character is true and lower case then store random values
  
 if(specialChar === true && lowerCase === true && upperCase === false && numChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      charString += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  // will check if lower case and numeric characters is true then store random values
  
  if(lowerCase === true && numChar === true && upperCase === false && specialChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      charString += "0123456789";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  //will check if lower case is true and return store values
  
  if(lowerCase === true && upperCase === false && specialChar === false && numChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  // will check if upper case and lower case is true and store random values
  
  if(upperCase === true && lowerCase === true && specialChar === false && numCHar === false){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  // will check if special characters, lower case and upper case is true and store random string value
  
  if(specialChar === true && lowerCase === true && upperCase === true && numChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      charString += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  // will check if numeric character lower case and upper case are true and store random string value
  
  if(numChar === true && lowerCase === true && upperCase === true && specialChar === false){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      charString += "0123456789";
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  // will check numeric character lowercase, uppercase and special character are true and store random string value
  
  if(numChar === true && lowerCase === true && upperCase === true && specialChar === true){
    for(var i = 0; i < passLength; i++){
      charString += "abcdefghijklmnopqrstuvwxyz";
      charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      charString += "0123456789";
      charString += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      
      retVal += charString.charAt(Math.floor(Math.random() * charString.length));
    }
  }
  
  
  return retVal;
  
};

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
