// 2. Wykorzystując plik wynikowy z zadania 1 odczytaj plik i wyświetl jedynie nazwisko
// (`lastname`) w konsoli.
// Końcowym efektem jest wyświetlenie na konsoli nazwiska zapisanego w pliku.
// podpowiedź: aby wczytać dany plik wykorzystujemy asynchroniczną funkcję `readFile()` z
// modułu wbudowanego(`fs`). Kolejnym elementem jest przekonwertowanie wczytanego
// ciągu znaków do obiektu wykorzystując funkcję `JSON.parse()`

const fs = require('fs');

let user = fs.readFile('user.json', (err, data) => {
    let user;
    if(err) {
        console.log("Error reading data !");
    } 
    if (data) {
        user = JSON.parse(data)
    }
    console.log(user.lastname);
})

