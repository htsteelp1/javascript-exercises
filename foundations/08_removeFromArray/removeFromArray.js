const removeFromArray = function(array, ...args) {
    for (let i = 1; i < arguments.length; i++) {
        array = array.filter((value) => !(value===arguments[i]))
    }
    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
