const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

const multiply = function(...numbers) {
  let result = 1;

  numbers.forEach(num => {
    result *= num;
  });

  return result;
};

const power = function(inputNumber, power) {
	let result = 1;

  for (let i = 0; i < power; i++) {
    result *= inputNumber;
  }

  return result;
};

const factorial = function(inputNumber) {
	let result = inputNumber;

  if (inputNumber === 0) {
    return 1;
  }
  else {
    for (let i = inputNumber-1; i > 0; i--) {
      result *= i;
    }
  
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
