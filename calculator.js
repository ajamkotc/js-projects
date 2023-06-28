//This stores the resultsDisplay div
const resultsDisplay = document.querySelector('.results-container');

//This stores the currently chosen calculator operation
let currentOperator = "";

/* This stores the number in the display when an operation button 
 * is clicked.
 */
let resultsDisplayNum;

//This resets the display to display 0.
function clearDisplay() {
    resultsDisplay.textContent = '0';
}

/* This function is called when the clear button is pressed. 
 * It resets the display to display the number 0. 
 * It sets resultsDisplayNum to undefined so that isNaN
 * works correctly in the operandFunction. 
 */
function clearButton() {
    resultsDisplay.textContent = '0';
    resultsDisplayNum = undefined;
}

//This function is called when the equals sign is pressed
function equals() {
    
}

/* This method adds a number to the display.
 * If the user clicks 0 and the display is currently displaying 
 * 0, then it won't change.
 * If the user inputs a number when the screen is displaying 0, 
 * then the 0 will be replaced by the selected number.
 */
function addToDisplay(num) {
    //Checks if a 0 was entered while displaying 0
    if (num == 0 && resultsDisplay.textContent == '0') {        
    }
    //Replaces the 0 if another number is clicked while displaying 0
    else if(resultsDisplay.textContent == '0') {
        resultsDisplay.textContent = '';
        resultsDisplay.textContent += `${num}`;
    }
    else {
        resultsDisplay.textContent += `${num}`;
    }
}

/* This function is called when a calculator operand is clicked.
 * It stores the operand passed into it into the global variable 
 * currentOperator. 
 * Then it checks if there was a number already stored in global
 * variable resultsDisplayNum. If yes, then it passes the 
 * inputted operand, the number stored in resultsDisplayNum, and
 * the current number in the display to operate. It updates 
 * the display with the return value of operate. 
 * If there was no number already stored in resultsDisplayNum, 
 * then it stores the current display number in the variable
 * and resets the display to 0.
 * This check allows for the user to chain operations and operate
 * on the result of the preious operation. 
 */
function operandFunction(operator) {
    currentOperator = operator;
    
    //Checks if a number is already stored in resultsDisplayNum
    if(isNaN(resultsDisplayNum)) {
        resultsDisplayNum = parseInt(resultsDisplay.textContent);
        clearDisplay();
    }
    else {
        resultsDisplay.textContent = operate(currentOperator, resultsDisplayNum, parseInt(resultsDisplay.textContent));
    }   
}

//These functions perform basic calculator functions
function add(num1, num2)        {return num1 + num2;}
function multiply(num1, num2)   {return num1 * num2;}
function divide(num1, num2)     {return num1 / num2;}
function square(num1)           {return num1 * num1;}
function power(num1, power)     {return num1 ** power;}
function subtract(num1, num2)   {return num1 - num2;}

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

    if (returnValue) {
        return returnValue;
    }
    else {
        alert("Error, please try again.");
    }
}