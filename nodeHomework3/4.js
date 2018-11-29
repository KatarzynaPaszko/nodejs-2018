// 4. Stwórz aplikację która pobierze informację o użytkowniku podając jego id z API:
// https://jsonplaceholder.typicode.com/users/{ID}
// i wyświetl w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz
// jego imię.
// Endpoint z przykładowym ID: https://jsonplaceholder.typicode.com/users/2
// Uruchomienie aplikacji:
// > node app.js
// Wynik w konsoli
// lat -43.9509
// lng -34.4618

const request = require('request');
const argv = require('yargs').argv;
const api = 'https://jsonplaceholder.typicode.com/users/';
const userId = argv.id;

let endpoint = api + userId;

request(endpoint ,function (error, response, body) {
  if (body) {
      let user = JSON.parse(body);
      let name = user.name;
      let lat = user.address.geo.lat;
      let lng = user.address.geo.lng;
    console.log("Użytkownik " + name + " znajduje się: \n lat: " + lat + "\n lng: " + lng);
  }
});