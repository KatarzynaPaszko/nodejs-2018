// 6. Zmodyfikować aplikację z pkt.4 tak aby podając 2 argumenty 
//     podczas uruchamiania sumował liczby

const myMath = require('./myMath');

const myNumber1 = process.argv[2];
const myNumber2 = process.argv[3];

const sum = myMath.addNumbers(Number(myNumber1), Number(myNumber2));


console.log(sum);