// 8. Jak wiadomo świat Node.js jest bardzo rozbudowany i nie trzeba za każdym razem tworzyć
// od nowa konstrukcji asynchronicznych żądań do serwera. Są od tego biblioteki😊
// Na stronie https://npmjs.org możemy znaleźć dużo różnych implementacji bibliotek które
// udostępniają już gotowe obiekty przystosowane do Promise, np.:
// - axios (https://www.npmjs.com/package/axios)
// - request-promise (https://www.npmjs.com/package/request-promise)
// Ok, przejdźmy jednak do zadania ... Wykorzystując bibliotekę `axios` zamieńmy z zadania 7 `request`
// wraz z naszymi Promise na bibliotekę `axios`.

const axios = require ('axios');
const { writeFile } = require('fs');

function saveToFile(obj) {
    const temp = obj.main.temp
    const objToString = JSON.stringify(temp);
    new Promise((resolve, reject) => {
        writeFile('weather.txt', objToString, (err) => {
            if (err) {
                reject(err)
            }
            resolve();
        });
    })
}

function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return axios(url).then(response => response.data);
}

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
  
}

getUser(1)
    .then(user =>  {
        console.log(user.name);
        const { lat, lng } = user.address.geo;
        return getWeather(lat, lng);
    })
    .then(weather => {
        console.log(`Temperatura wynosi ${weather.main.temp}`);
        return weather;
    })
    .then(saveToFile)
    .catch(error => console.log("error" + error.message))
    .finally(console.log('Koniec działania aplikacji'));