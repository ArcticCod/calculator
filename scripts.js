function add(a, b) {
    sum = a + b;
    return sum
}

function subtract(a, b) {
    sum = a - b;
    return sum
}
function multiply(a, b) {
    sum = a * b;
    return sum
}

function divide(a, b) {
    sum = a / b;
    return sum
}

let number1 = 0
let number2 = 0
let operator = ""

function operate(a, b, c) {
    if (c = "+") {
        return add(a, b)
    }else if (c = "-") {
        return subtract(a,b)
    }else if (c = "*") {
        return multiply(a, b)
    }else if (c = "/") {
        return divide(a, b)
    }else {
        // return SOMETHING
    }
}

const displayText = document.querySelector(".calc-text")
// displayText.textContent = 
function getDisplayText(e){
    displayText.textContent = `${e}` 
}

const nineBtn = document.querySelector(".nine")
nineBtn.addEventListener("click", () => {
    console.log("Hi")
})