// 7. Zmodyfikować aplikację z pkt.6 aby 3 argument definiował 
//     jakie ma wykonać działanie (dodawanie/odejmowanie)

const myMath = require('./myMath');

const myNumber1 = process.argv[2];
const myNumber2 = process.argv[3];
const typeOfOperation = process.argv[4];

const result = myMath.addNumbers(Number(myNumber1), Number(myNumber2), typeOfOperation);


console.log(result);