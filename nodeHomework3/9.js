// 9. Podzielmy naszą aplikację z punktu 8 na moduły odpowiednio:
// app.js – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu
// user.js
// user.js – plik z pobieraniem danych użytkownika
// weather.js – plik z pobieraniem danych o prognozie pogody

// DROBNE WSKAZÓWKI

//     1. Konwersja obiektu do postaci tekstowej(string)
//     const obj = {
//          name: 'Jan',
//          lastname: 'Nowak'
//     };
//     const objString = JSON.stringify(obj);
//     console.log(objString);
//     wynik: {"name":"Jan","lastname":"Nowak"}

//     2. Konwersja tekstu typu JSON do obiektu:
//     const objString = '{"name":"Jan","lastname":"Nowak"}';
//     const obj = JSON.parse(objString);
//     console.log(obj.name)
//     Wynik Jan