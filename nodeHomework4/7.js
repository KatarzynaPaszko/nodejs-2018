// 7. Rozszerzając zadanie 6 z wykorzystaniem wiedzy z poprzednich zajęć, zapiszmy nasz
// cały obiekt pogody do pliku wykorzystując wbudowany moduł `fs` i funkcję
// `writeFile`. Oczywiście zadanie polega na odpowiednim dostosowaniu funkcji aby
// obsługiwała Promise.
// function saveToFile(obj) {
// return ... <----- implementacja Promise
// }
// getUser(2)
// .then(getWeather)
// .then(...) <---- wypisz w konsoli temperature
// .then(weather => {
// return saveToFile(weather)
// })
// .catch(...)
// .finally(...);

const request = require ('request');
const { writeFile } = require('fs');

function saveToFile(weather) {
    writeFile('weather.txt', weather, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

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
    .then(temp => {
        console.log(`Temperatura wynosi ${temp}`);
        return temp;
    })
    .then(weather => saveToFile(weather))
    .catch(error => console.log("error" + error))
    .finally(console.log('Koniec działania aplikacji'));
