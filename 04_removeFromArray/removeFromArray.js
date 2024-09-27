const removeFromArray = function(inputArray, ...inputArguments) {
    const returnArray = [];

    inputArray.forEach((item) => {
        if (!inputArguments.includes(item)) {
            returnArray.push(item);
        }
    });

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
