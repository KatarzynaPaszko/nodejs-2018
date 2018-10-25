// 4. Stworzenie aplikacji składającej się z 2 plików 
//     a. 1 plik główny który wczyta 2 plik z odpowiednimi elementami 
//     b. 2 plik myMath ma za zadanie zwrócić funkcję do dodawania i odejmowania 2 liczb. 
//     c. ma zwrócić również zmienną matematyczną PI 
//     d. w głównym pliku wykorzystać 
//         wyeksportowane funkcje oraz zmienne wykonując przykładowe działania. 
//     e. wyświetlić wynik w konsoli


const myMath = require('./myMath');

const sum = myMath.addNumbers(myMath.PI, 5);
console.log(sum);