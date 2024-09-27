const reverseString = function(inputString) {
    let input = inputString;
    const charArray = input.split("");
    let reverseString = "";

    for (let i = charArray.length - 1; i >= 0; i--) {
        reverseString += charArray[i];
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
