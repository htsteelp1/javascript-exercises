const sumAll = function(numA, numB) {
    if (!(parseInt(numA) === numA) || !(parseInt(numB) === numB) || numA < 0 || numB < 0) {
        return "ERROR";
    }
    let smallNum = numA<numB ? numA : numB;
    let bigNum = numB>numA ? numB : numA;
    let sum = 0;
    for (let i = smallNum; i<=bigNum; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
