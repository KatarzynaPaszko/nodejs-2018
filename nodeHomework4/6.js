// 6. Dodajmy do naszej aplikacji z zadania 4 pobieranie pogody dla naszego użytkownika.
// Podobnie jak w poprzednim laboratorium. Pamiętajmy o odpowiednim owrapowaniu
// naszego zapytania do pogody. Analogicznie jak w zadaniu 4.
// Endpoint do pogody:
// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d
// 6e&lat={LAT}&lon={LNG}
// Zarys wywołania aplikacji:
// getUser(2)
// .then(getWeather)
// .then(...) <---- wypisz w konsoli temperature
// .catch(...)
// .finally(...);


const request = require ('request');

function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return new Promise ((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject ('weather not found');
            } else {
                const weather = JSON.parse(body);
                const temp = weather.main.temp
                resolve (temp);
            }  
        })
    })
}

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return new Promise ((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('user not found');
            } else {
                let user = JSON.parse(body);
                resolve(user);
            };     
        });   
    })   
}

getUser(1)
    .then(user =>  getWeather(user.address.geo.lat, user.address.geo.lng))
    .then(temp => console.log(`Temperatura wynosi ${temp}`))  
    .catch(error => console.log("error" + error))
    .finally(console.log('Koniec działania aplikacji'));
