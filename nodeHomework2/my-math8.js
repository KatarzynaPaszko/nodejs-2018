module.exports.multiply = function (a, b, callback) {
    const result = a * b;
    setTimeout(function () {
        callback(result);
    }, 3000)
};

module.exports.divide = function (a, b, callback) {
    const result = a / b;
    setTimeout(function () {
        callback(result);
    }, 3000)
};
