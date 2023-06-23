const sumAll = function(startInt, endInt) {
    let i;
    let greaterInt;
    let returnInt = 0;
    
    if (typeof startInt !== "number" || typeof endInt !== "number") {
        return "ERROR";
    }
    else if (startInt < 0 || endInt < 0) {
        return "ERROR";
    }
    else if (startInt > endInt) {
        i = endInt;
        greaterInt = startInt;
    }
    else {
        i = startInt;
        greaterInt = endInt;
    }

    while (i <= greaterInt) {
        returnInt += i;

        i++;
    }

    return returnInt;
};

// Do not edit below this line
module.exports = sumAll;
