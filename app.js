// function addition(){
//      = number1 + number2;
// }
// function subtraction() {
//      = number1-number2;
// }
// function multiplication() {
//      = number1*number2;
// }
// function division() {
//      = number1/number2;
// }

console.log("hi");
function calc() {
    let number1 = new Number(document.getElementById("number1").value);
    let number2 = new Number(document.getElementById("number2").value);

    let lblOutput = document.getElementById("output");
    let op = document.getElementById("op").value;

    switch (op) {
        case "+": lblOutput.innerHTML = number1 + number2; break;
        case "-": lblOutput.innerHTML = number1 - number2; break;
        case "*": lblOutput.innerHTML = number1 * number2; break;
        case "/": lblOutput.innerHTML = number1 / number2; break;
    }
} 
