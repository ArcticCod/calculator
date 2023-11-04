function add(a, b) {
    sum = parseFloat(a) + parseFloat(b);
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
    if (b === "0"){
        sum = "Undefined"
        return sum
    
    }else {
    sum = (a / b);
    return sum
    }
}

let number1 = null
let number2 = null
let operatorSign = ""
let decimalCounter = 0

// function operate(a, b, c) {
//     if (c = "+") {
//         return add(a, b)
//     }else if (c = "-") {
//         return subtract(a,b)
//     }else if (c = "*") {
//         return multiply(a, b)
//     }else if (c = "/") {
//         return divide(a, b)
//     }else {
//         // return SOMETHING
//     }
// }

const displayText = document.querySelector(".calc-text")
// displayText.textContent = 
function getDisplayText(x){
    displayText.textContent = `${x}` 
}
const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    displayText.textContent = ""
    number1 = ""
    number2 = ""
    operatorSign = ""
})
const backBtn = document.querySelector(".backspace")
backBtn.addEventListener("click", () => {
    displayArr = displayText.textContent.split("")
    let pop = displayArr.pop()
    displayText.textContent = displayArr.join("")
})
// const nineBtn = document.querySelector(".nine")
// nineBtn.addEventListener("click", () => {
//     getDisplayText(9)
// })

const buttonsArr = [["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5],
 ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9], ["zero", 0], ["plus", "+"],
 ["minus", "-"], ["divide", "/"], ["multiply", "*"], ["equals", "="], ["decimal", "."]]

for (button of buttonsArr) {
    let element = document.querySelector(`.${button[0]}`)
    // element.string = button[0] PROB DONT USE THIS DELETE IT
    element.value = button[1]
    element.addEventListener("click", () => {
        onClick(element.value)
        
    })
}
function isNumber(value) {
    if (typeof value === 'number'){
        return true
    }
    return false
  }
  function operatorCheck(operator) {
    if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
        return true
    }
    return false
  }

// x = element.value
 function onClick(x) {
    if(displayText.textContent.length === 0) {
        
    }
        // let text = displayText.textContent
        let numCheck = !(isNaN(x))
        let oper = x
        // is input an operator
        if (operatorCheck(oper)) {
            // is last input an operator
            if(lastInputCheck()) {
                // delete last display position and add new operator
                operatorReplace(oper)
                displayText.textContent += oper
            }else if (operatorSign.length === 1) {
                getLastVar()
                sum = pickMath(operatorSign)
                number1 = sum
                displayText.textContent = sum + oper
                operatorSign = oper
                number2 = ""
            }else {
            number1 = parseFloat(displayText.textContent)
            displayText.textContent += oper
            }
        }else if (oper === "=") {
            // if(number1.length > "0" && number2.length > "0" && operatorSign.length > "0") {
            //     sum = pickMath(operatorSign)
            // }
            getLastVar()
            sum = pickMath(operatorSign)
            displayText.textContent = sum
            operatorSign = ""
            number1 = sum

        }else if(x === ".") {
            let text = displayText.textContent
            number1String = number1.toString()
            text = text.slice(number1String.length, )
            if (text.includes(".")){
            }else {
            displayText.textContent += x 
            }
        }else if ((numCheck)) {
            text = displayText.textContent
            textArr = text.split('')
            if (lastInputCheck()) {
                operatorSign = displayText.textContent.split("").pop()
            }
            displayText.textContent += x
        }
  }

  function lastInputCheck() {
    text = displayText.textContent
    textArr = text.split("")
    arrLast = textArr.pop()
    if (arrLast === "+" || arrLast === "-" || arrLast === "*" || arrLast === "/") {
        return true
    }
    return false
  }
function operatorReplace(oper) {
    text = displayText.textContent
    textArr = text.split("")
    textArr.pop()
    displayText.textContent = textArr.join("")
}
 function getLastVar() {
    text = displayText.textContent
    number1String = number1.toString()
    operatorSignString = operatorSign.toString()
    number2 = (text.slice((number1String.length+operatorSignString.length), ))
    console.log(number2)
 }
 function pickMath(sign) {
    if (sign === "+") {
        add(number1, number2)
        return sum
    }else if (sign === "-") {
        subtract(number1, number2);
        return sum
    }else if (sign === "*") {
        multiply(number1, number2)
        return sum
    }else if (sign === "/") {
        divide(number1, number2)
        return sum
    }

 }
 function decimalChecker() {
    
 }



