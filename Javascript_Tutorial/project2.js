const prompt = require("prompt-sync")()

//const number1 = parseFloat(prompt("Enter Number 1: "))//number1 and number2 is string
//const number2 = parseFloat(prompt("Enter Number 2: "))//parseFloat will change string to floating-point return NaN

function getNumber(numbeString) {
    while (true) {
        const number = parseFloat(prompt("Enter Number " + numbeString + ": ")) //promt does not allow , 
        if (isNaN(number)) {
            console.log("Invalid Input")
        }else{
            return number
        }
    }
}
const number1 = getNumber("One");
const number2 = getNumber("Two");

const operator = prompt("Enter Sign: " )

let result;
let valid = true
switch (operator){
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1 - number2
        break; 
    case "*":
        result = number1 * number2
        break;   
    case "/":
        if (number2 === 0){
            valid =false
            console.log("Zero Division Error")
        }
        result = number1 / number2
        break;
    default:
        console.log("Invalid")
        valid = false
        break;
}
if (valid) 
    console.log(number1, operator, number2, "=", result) // no curly braces if using one line

