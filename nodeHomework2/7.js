// 7. Zmodyfikuj aplikację z pkt. 5 tak aby operacje mnożenia i dzielenia były
// asynchroniczne(callback function)
// Funkcja mnożenia i dzielenia powinna przyjmować 3 argumenty `a`, `b` oraz `callback`
// Przekazana funkcja ma za zadanie wyświetlić wynik naszego działania;
// Np.:
//     myMath.divide(3, 5, function (result) {
//       console.log(result);
//     });

const yargs = require('yargs');
const myMath = require('./my-math8');

const argv = yargs.argv;

const operator = argv.operator;
const a = argv.a;
const b = argv.b;

console.log(argv);

if (operator === '*') {
    myMath.multiply(a, b, function (result) {
        console.log('result', result);
    });
} else {
    myMath.divide(a, b, function (result) {
        console.log('result', result);
    });
}
