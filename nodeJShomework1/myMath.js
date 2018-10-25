module.exports.addNumbers = (num1, num2, typeOfOperation) => {
    let result;
    if (typeOfOperation === 'minus') {
        result = num1-num2; 
    } else if (typeOfOperation === 'plus') {
        result = num1+num2;
    } else if (!typeOfOperation) {
        result = num1+num2;
    } else {
        result = 'Choose type of operation "plus" or "minus" and run application again';
    }
    return result;
}

module.exports.PI = Math.PI;