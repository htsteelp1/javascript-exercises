const reverseString = function(string) {
    let arrayString = string.split('');
    let reverseArray = [];
    for (let i = 0; i<string.length; i++) {
        reverseArray.push(arrayString.pop());
    }
    let reverseString = reverseArray.join('')
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
