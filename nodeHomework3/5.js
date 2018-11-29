// 5. Rozszerzmy zadanie 4 tak aby nasza aplikacja poinformowała użytkownika o błędzie
// pobierania danych lub braku szukanego użytkownika w bazie.
// Każdy `response` w swoim `callback` posiada informacje niezbędne do sprawdzenia
// poprawności pobranych danych, taki callback wygląda następująco:
// function callback(error, response, body) {
// // … ciało funkcji
// }
// error – jest błędem który informuję nas iż jest problem z połączeniem do serwera
// response – jest naszą odpowiedzią która zawiera informacje jakie serwer nam zwrócił(w
// naszym zadaniu istotny jest `statusCode`, w przypadku zwrócenia poprawnie danych
// otrzymamy kod z numerem 200 (https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP) w
// innym przypadku dostaniemy inny kod.
// body – dane zwrócone z naszego API.
// W tym zadaniu pobawmy się w debugowanie! Zobaczmy kiedy i jakie dane przychodzą z
// serwera!

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