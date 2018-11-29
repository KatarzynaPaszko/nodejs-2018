// 6. Dodajmy do zadania 5 możliwość dynamicznego wprowadzania ID poprzez wczytanie
// zewnętrznej biblioteki `yargs`
// > node app.js --id=2
// Wynik w konsoli:
// Ervin Howell
// lat -43.9509
// lng -34.4618
// > node app.js --id=20
// Wynik w konsoli:
// User not found.


const request = require('request');
const argv = require('yargs').argv;
const api = 'https://jsonplaceholder.typicode.com/users/';
const userId = argv.id;

let endpoint = api + userId;

function callback(error, response, body) {
    if (error) {
        console.log('Error  connecting to server!')
    } else if(response.statusCode !== 200) {
        console.log('Id is not found!')
    } else {
        let user = JSON.parse(body);
        let name = user.name;
        let lat = user.address.geo.lat;
        let lng = user.address.geo.lng;
        console.log("Użytkownik " + name + " znajduje się: \n lat: " + lat + "\n lng: " + lng);
    }  
}

request(endpoint ,callback);