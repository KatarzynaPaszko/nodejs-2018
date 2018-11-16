// 11. Stwórz aplikację która pobierze dane dotyczące pogody i wyświetl ją na konsoli.
// Adres do pobrania danych:
// https://api.openweathermap.org/data/2.5/weather?q=Białystok&APPID=0ed761300a2725ca778c07
// 831ae64d6e
// W tym zadaniu wykorzystamy zewnętrzny moduł ‘request’
// (https://www.npmjs.com/package/request). Pakiet ten udostępnia nam funkcje pozwalające na
// wysłanie żądania do zewnętrznego serwera i pobranie danych.

const request = require('request');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bialystok&APPID=0ed761300a2725ca778c07831ae64d6e';

request.get(url, function (error, response, body) {
  if (body) {
    console.log('body:', body);
  }
});
