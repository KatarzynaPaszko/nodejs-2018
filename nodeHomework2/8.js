//
// 8. Stwórz aplikację która pobierze informacje o naszym koncie z API Github’a.
// Adres do pobrania danych:
// https://api.github.com/users/{nazwa_użytkownika}
// np.:
// https://api.github.com/users/piotar
// W tym zadaniu wykorzystamy zewnętrzny moduł ‘request’
// (https://www.npmjs.com/package/request). Pakiet ten udostępnia nam funkcje pozwalające na
// wysłanie żądania do zewnętrznego serwera i pobranie danych.

const request = require('request');



const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

let name = request('https://api.github.com/users/KatarzynaPaszko', requestOptions ,function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

console.log(name);

// const requestOptions = {
//     headers: {
//         'User-Agent': 'request'
//     }
// };

// request.get('https://api.github.com/users/KatarzynaPaszko', requestOptions, function (error, response, body) {
//     if (body) {
//         console.log(body);
//     }
// });
