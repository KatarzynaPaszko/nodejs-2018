const weatherModule = require('./weather');
const request = require('request');
const api = 'https://jsonplaceholder.typicode.com/users/';




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
        weatherModule.getWeather(lat, lng);
    }  
}
function getUser(id) {
    let endpointUserInfo = api + id;
    request(endpointUserInfo ,callbackUserInfo);
}

module.exports = {
    getUser,
}


