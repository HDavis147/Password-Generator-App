// Assignment code here


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

      console.log(lowercaseChoice);
      choice = lowercaseChoice.toUpperCase();
      console.log(choice);
      choiceAndTypeAssignment(choice, type);
    }


    //Allows user to choose to use uppercase letters
    function uppercaseQuestion () {
      var type = "uppercase";
      var uppercaseChoice = window.prompt("Should the password include uppercase characters?\nAnswer should be 'yes' or 'no'.");

      console.log(uppercaseChoice);
      choice = uppercaseChoice.toUpperCase();
      console.log(choice);
      choiceAndTypeAssignment(choice, type);
    }

    function numericQuestion () {
      var type = "numeric";
      var uppercaseChoice = window.prompt("Should the password include numeric characters?\nAnswer should be 'yes' or 'no'.");

      console.log(numericChoice);
      choice = numericChoice.toUpperCase();
      console.log(choice);
      choiceAndTypeAssignment(choice, type);
    }

    function specialQuestion () {
      var type = "special";
      var uppercaseChoice = window.prompt("Should the password include special characters?\nAnswer should be 'yes' or 'no'.");

      console.log(specialChoice);
      choice = specialChoice.toUpperCase();
      console.log(choice);
      choiceAndTypeAssignment(choice, type);
    }

    // Brings in values choice and type from the questions, alerts the user of the outcome, and returns a boolean
    function choiceAndTypeAssignment (choice, type) {
      var typeString = "";
      console.log("You are in the assignment function.\nType: " + type + "\nChoice: " + choice);

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

    lowercaseQuestion();
    uppercaseQuestion();
    numericQuestion();
    specialQuestion();
    
    password = "beans";
    return password;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//** */ WHEN prompted for the length of the password
//** */ THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include *lowercase, *uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page