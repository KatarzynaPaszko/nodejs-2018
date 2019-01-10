// 9. Dodajmy do naszej aplikacji z zadania 7 pobieranie pogody dla naszego użytkownika (z odpowiedzi
//     weźmy main.temp i wyświetlmy na ekranie). Zadanie analogiczne jak w poprzednim laboratorium z
//     wykorzystaniem składni async/await.
//     Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?
//     appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}

const axios = require('axios');

async function getWeather(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return axios(url).then(response => response.data) 
}

async function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
}

(async function () {
    try {
        const result = await getUser(2);
        const { lat, lng } = result.address.geo;
        const weather = await getWeather(lat, lng);
        console.log(weather.main.temp);
    } catch(error) {
        console.log(error.message);
    }
})();