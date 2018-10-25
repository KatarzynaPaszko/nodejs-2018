// 3. Zapoznanie się z wbudowanym modułem ‘fs’(file system) oraz ‘OS’
//     (https://nodejs.org/dist/latest-v10.x/docs/api/)
//     a. Stworzenie prostej aplikacji zapisującej nazwę użytkownika
//     b. Przetestowanie funkcji `writeFile`, `writeFileSync`, `appendFile`
//     c. Wczytanie zapisanej wcześniej nazwy użytkownika z pliku.
//     d. Przetestowanie funkcji `readFile`, `readFileSync`
//     e. Wyświetlenie informacji na ekranie

const os = require('os');
const fs = require('fs');

// a. Stworzenie prostej aplikacji zapisującej nazwę użytkownika
const name = os.userInfo().username;
// console.log(name);

// b. Przetestowanie funkcji `writeFile`, `writeFileSync`, `appendFile`
fs.writeFile('3b-1.txt', name, (err)=> {
    if (err) throw err;
    console.log('The file 3b-1.txt has been saved!');
});

fs.writeFileSync('3b-2.txt', name, (err)=> {
    if (err) throw err;
    console.log('The file 3b-2.txt has been saved!');
});

fs.appendFile('3b-3.txt', 'Kasia', (err)=> {
    if (err) throw err;
    console.log('The file 3b-3.txt has been saved!');
});