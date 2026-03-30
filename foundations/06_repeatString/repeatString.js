const repeatString = function(string, num) {
    let arrayString = string.split();
    if (num>0) {
        let finalString = "";
        for (let i = 1; i<=num; i++)
            finalString = arrayString.reduce((totalString, currentLetter) => {
                return totalString + currentLetter;
    },finalString);
        return finalString;
    }
    else if (num === 0) {
        return "";
    }
    else {
        return "ERROR";
    }


};

// Do not edit below this line
module.exports = repeatString;
