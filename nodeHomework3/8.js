// 8. Podobnie jak w zadaniu 5 zabezpieczmy naszą aplikację z zadania 7 tak aby
// poinformować użytkownika o przypadkowych problemach z naszym API.


const request = require('request');
const argv = require('yargs').argv;
const api = 'https://jsonplaceholder.typicode.com/users/';
const userId = argv.id;

let endpointUserInfo = api + userId;

function callbackWeather(error, response, body) {
    const weather = JSON.parse(body);
    console.log('Pogoda dla tego tego użytkownika: ' + weather.main.temp);
}
function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(url, callbackWeather);
}

function callbackUserInfo(error, response, body) {
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
        let weather = getWeather(lat, lng);
    }  
}

request(endpointUserInfo ,callbackUserInfo);