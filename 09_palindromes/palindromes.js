const palindromes = function (inputString) {
    let returnString = inputString.replace(/[.,!]/g, "");
    returnString = returnString.replace(/\s/g, "");
    returnString = returnString.toLowerCase();

    let forward = 0;
    let backward = returnString.length - 1;

    while(forward < backward) {
        if(returnString[forward] !== returnString[backward]) {
            return false;
        }

        forward++;
        backward--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
