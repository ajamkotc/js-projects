const getTheTitles = function(bookArray) {
    const returnArray = [];
    
    for(let i = 0; i < bookArray.length; i++) {
        let bookObj = bookArray[i];
        returnArray.push(bookObj.title);
    }

    return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;
