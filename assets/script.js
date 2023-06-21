// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var lowercaseApply;
    var uppercaseApply;
    var numericApply;
    var specialApply;
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var lowerArray = lowercaseCharacters.split("");
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperArray = uppercaseCharacters.split("");
    var numericCharacters = "0123456789";
    var numericArray = numericCharacters.split("");
    var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var specialArray = specialCharacters.split("");
    var password = [];

    //Allows users to choose password length
    var pwLength = window.prompt("How long should the password be? \nMinimum: 8\nMaximum: 128");

    if(pwLength < 8 || pwLength > 128) {
      window.alert("Invalid length. Starting over.");
      generatePassword();
    }
    

    //Allows user to choose to use lowercase letters
    function lowercaseQuestion () {
      var type = "lowercase";
      var lowercaseChoice = window.prompt("Should the password include lowercase characters?\nAnswer should be 'yes' or 'no'.");
      choice = lowercaseChoice.toUpperCase();
      choiceAndTypeAssignment(choice, type);
    }


    //Allows user to choose to use uppercase letters
    function uppercaseQuestion () {
      var type = "uppercase";
      var uppercaseChoice = window.prompt("Should the password include uppercase characters?\nAnswer should be 'yes' or 'no'.");
      choice = uppercaseChoice.toUpperCase();
      choiceAndTypeAssignment(choice, type);
    }

    //Allows user to choose to use numeric characters
    function numericQuestion () {
      var type = "numeric";
      var numericChoice = window.prompt("Should the password include numeric characters?\nAnswer should be 'yes' or 'no'.");
      choice = numericChoice.toUpperCase();
      choiceAndTypeAssignment(choice, type);
    }

    //Allows user to choose to use special characters
    function specialQuestion () {
      var type = "special";
      var specialChoice = window.prompt("Should the password include special characters?\nAnswer should be 'yes' or 'no'.");
      choice = specialChoice.toUpperCase();
      choiceAndTypeAssignment(choice, type);
    }

    // Brings in values choice and type from the questions, alerts the user of the outcome, and returns a boolean
    function choiceAndTypeAssignment (choice, type) {
      var typeString = "";

      if(choice == "YES") {
          if(type == "lowercase") {
            typeString = "Lowercase letters ";
            lowercaseApply = true;
          }
          else if(type == "uppercase") {
            typeString = "Uppercase letters ";
            uppercaseApply = true;
          }
          else if(type == "numeric") {
            typeString = "Numbers ";
            numericApply = true;
          }
          else if(type == "special") {
            typeString = "Special characters ";
            specialApply = true;
          }
          window.alert("You answered yes. " + typeString + "will be included in the password.");

      } else if(choice == "NO") {
          if(type == "lowercase") {
            typeString = "Lowercase letters ";
            lowercaseApply = false;
          }
          else if(type == "uppercase") {
            typeString = "Uppercase letters ";
            uppercaseApply = false;
          }
          else if(type == "numeric") {
            typeString = "Numbers ";
            numericApply = false;
          }
          else if(type == "special") {
            typeString = "Special characters ";
            specialApply = false;
          }
          window.alert("You answered no. " + typeString + "will not be included in the password.");

      } else {
          // Else case catches invalid answers and returns the user to the correct character prompt function based on type value
          window.alert("Invalid answer. Please try again.");
          if(type == "lowercase") {
            lowercaseQuestion();
          } else if (type == "uppercase"){
            uppercaseQuestion();
          } else if (type == "numeric"){
            numericQuestion();
          } else if (type == "special"){
            specialQuestion();
          }
      }
    }

    // Runs the character type prompt functions and allows the user to return to where they were if invalid input is detected
    lowercaseQuestion();
    uppercaseQuestion();
    numericQuestion();
    specialQuestion();

    // Validates that at least one character type has been chosen
    if((lowercaseApply == false) && 
      (uppercaseApply == false) && 
      (numericApply == false) && 
      (specialApply == false)) {
      window.alert("At least one character type must be selected. Please try again.");
      generatePassword();
    }

    var finalArray = [];

    // Checks what character types were chosen and adds those characters to an array
    if (lowercaseApply == true) {
      finalArray = lowerArray;
    }
    if (uppercaseApply == true) {
      finalArray = finalArray.concat(upperArray);
    }if (numericApply == true) {
      finalArray = finalArray.concat(numericArray);
    }if (specialApply == true) {
      finalArray = finalArray.concat(specialArray);
    }

    // Iterates through password length, adding 1 character at a time to the password array via the finalArray built in the last step
    for(i = pwLength; i>0; i--) {
      symbolPlace = Math.floor(Math.random() * finalArray.length);
      symbol = finalArray[symbolPlace];
      password = password.concat(symbol);
    }

    // Passes the password array out of the generatePassword function
    return password;
  }

  var passwordText = document.querySelector("#password");

  // Sets the password text to the password array, joined with no separators
  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);