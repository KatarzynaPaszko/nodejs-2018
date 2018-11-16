// 5. Wykorzystując zdobytą wiedzę z poprzednich zajęć skorzystaj z zewnętrznej biblioteki
// 'yargs' (https://www.npmjs.com/package/yargs) i stwórz aplikację mnożenia i
// dzielenia wprowadzonych argumentów
// > node app.js --a=5 --b=7 --operation=*
// Konsola powinna zwrócić wynik operacji mnożenia…

const argv = require('yargs').argv
const myMath = require('./my-math');

const a = Number(process.argv.a);
const b = Number(process.argv.b);
const operator = process.argv.operator;

if (operator === '*') {
    console.log(myMath.multiply(a, b));
} else {
    console.log(myMath.divide(a, b));
}
