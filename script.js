// Variables //
var button = document.getElementById("generate");
button.addEventListener("click", writePassword);



// Functions//
//Using http://www.net-comber.com/charset.html Character Set

function getPassword() {
    // console.log("getPassword");
    // Prompts //
    var passwordLen = prompt('How many characters would you like your password to contain?');
    var lower = confirm("Click OK to confirm including lowercase characters.");
    var upper = confirm("Click OK to confirm including uppercase characters.");
    var number = confirm("Click OK to confirm including number characters.");
    var symbols = confirm("Click OK to confirm including symbols characters.");
   
    var newPassword = ""; 
    // Loop //
    for (var i = 0; i < passwordLen; i++) {
        var result = [];
        // If Statements //

        if (lower) {
            result.push(getRandomLower())
        }
        if (upper) {
            result.push(getRandomUpper())
        }
        if (number) {
            result.push(getRandomNumber())
        }
        if (symbols) {
            result.push(getRandomSymbols())
        }
        newPassword = newPassword + result.join(''); 
        newPassword = newPassword.substring(0, passwordLen);
        // console.log(newPassword)
    
    }//end of for loop 
  
    return newPassword;
    
}


function getRandomLower() {
    console.log(String.fromCharCode((Math.floor(Math.random() * 26) + 97)));
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}

function getRandomUpper() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}

function getRandomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}

function getRandomSymbols() {
    const symbols = "!@#$%^&*()_+={}[]";
    return symbols[Math.floor(Math.random() * symbols.length)];
}




// Generate Password //
function writePassword() {
    console.log("Write password")
    var password = getPassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }