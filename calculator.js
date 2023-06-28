//This stores the resultsDisplay
const resultsDisplay = document.querySelector('.results-container');

//This clears the display div
function clearDisplay() {
    resultsDisplay.textContent = '0';
}

/* This method adds a number to the display.
 * If the user clicks 0 and the display is currently displaying 
 * 0, then it won't change.
 * If the user inputs a number when the screen is displaying 0, 
 * then the 0 will be replaced by the selected number.
*/
function addToDisplay(num) {
    if (num == 0 && resultsDisplay.textContent == '0') {        
    }
    else if(resultsDisplay.textContent == '0') {
        resultsDisplay.textContent = '';
        resultsDisplay.textContent += `${num}`;
    }
    else {
        resultsDisplay.textContent += `${num}`;
    }
}

//These functions perform basic calculator functions
function add(num1, num2) {return num1 + num2;}
function multiply(num1, num2) {return num1 * num2;}
function divide(num1, num2) {return num1 / num2;}
function square(num1) { return num1 * num1;}
function power(num1, power) { return num1 ** power;}
function subtract(num1, num2) { return num1 - num2;}

//This function calls the appropriate function 
function operate(operator, num1, num2) {
    let returnValue;
    switch (operator) {
        case '+':
            returnValue = add(num1, num2);
            break;
        case '-':
            returnValue = subtract(num1, num2);
            break;
        case '*':
            returnValue = multiply(num1, num2);
            break;
        case '^2':
            returnValue = square(num1);
            break;
        case '^':
            returnValue = power(num1, num2);
            break;
        case '/':
            returnValue = divide(num1, num2);
            break;
        default:
            console.log("Incorrect input");
    }

    if(returnValue) {
        return returnValue;
    }
}