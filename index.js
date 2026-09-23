const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLengthEl = document.getElementById("pass-length-el")
let passwrodOneEl = document.getElementById("password-one-el")
let passwrodTwoEl = document.getElementById("password-two-el")
let passwordLength 
let errorMsgEl = document.getElementById("error-msg-el")
function generatePass() {
    passwordLength = Number(passwordLengthEl.value)
    if (passwordLength > 7 && passwordLength < 19){
        let generatedPasswordOne = getRandomPassword ()
        let generatedPasswordTwo = getRandomPassword ()
        passwrodOneEl.textContent = generatedPasswordOne
        passwrodTwoEl.textContent = generatedPasswordTwo
    } else{
        errorMsgEl.textContent = "Password length should be from 8 characters to 18 characters!"
    }

}

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random()* characters.length)
    return characters[randomCharacter]
}

function getRandomPassword() {
    let randomPassword = ""
    for (let i= 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
    
}

