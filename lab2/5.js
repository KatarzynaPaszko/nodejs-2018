// 5. Wykorzystując zdobytą wiedzę z poprzednich zajęć skorzystaj z zewnętrznej biblioteki
// 'yargs' (https://www.npmjs.com/package/yargs) i stwórz aplikację mnożenia i
// dzielenia wprowadzonych argumentów
// > node app.js --a=5 --b=7 --operation=*
// Konsola powinna zwrócić wynik operacji mnożenia…

function sum(num1, num2) {
    let result =  num1 + num2;
    return result;
}

function minus(num1, num2) {
    let result = num1 - num2;
    return result;
}

// function doOperation(input1, input2, type) {
//     if(!input1 || !input2 || !type) {
//         console.log("Podaj parametry funkcji")
//     } else {
//         if(){

//         } else if() {
    
//         } else {
               
//         }

//     }
    
// }

const myNumber1 = process.argv[2];
const myNumber2 = process.argv[3];
const typeOfOperation = process.argv[4];


console.log(result);