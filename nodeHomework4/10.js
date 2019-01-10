// 10. Dodajmy do zadania 9 kolejny element łańcucha o zapis wczytanej listy zdjęć.
// Wykorzystujemy tutaj moduł wbudowany `fs` i funkcje `writeFile`. Zamiast opakowywać samodzielnie
// funkcję w Promise wykorzystajmy wbudowane narzędzie z modułu `util` (więcej na:
// https://nodejs.org/dist/latest-v11.x/docs/api/util.html#util_util_promisify_original) np.:
// const util = require('util');
// const fs = require('fs');
// const writeFilePromise = util.promisify(fs.writeFile);

const axios = require ('axios');
const util = require('util');
const fs = require('fs');
const writeFilePromise = util.promisify(fs.writeFile);

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
}

function getAlbums(id) {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
    return axios(url).then(response => response.data);
}

function getImages(id) {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    return axios(url).then(response => response.data);
}
getUser(2)
    .then(user =>  {
        console.log(user.name);
        const { id } = user;
        return getAlbums(id);
    })
    .then(albums => {
        const [firstAlbum] = albums;
        console.log("Ilość albumów " + albums.length);
        console.log("Nazwa pierwszego albumu: " + firstAlbum.title);
        return getImages(1);
    })
    .then(images => {
        const imagesTitles = images.map( image => `${image.title} \n`)
        console.log("Nazwy zdjęć: " + imagesTitles);
        return images;
    })
    .then(images => {
        const imagesToString = JSON.stringify(images);
        return writeFilePromise('images.json', imagesToString);
    })
    .catch(error => console.log("error" + error.message))
    .finally(console.log('Koniec działania aplikacji'));
