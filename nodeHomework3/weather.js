const request = require('request');

function callbackWeather(error, response, body) {
    const weather = JSON.parse(body);
    console.log('Pogoda dla tego tego użytkownika: ' + weather.main.temp);
}

function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(url, callbackWeather);
}

module.exports = {
    getWeather
}