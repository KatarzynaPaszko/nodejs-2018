// 9. Stwórzmy aplikację która pobierze informacje o użytkowniku oraz jego pierwszym na liście
// albumie i przypisanych do niego zdjęciach.
// Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika. 
// Z pobranego albumu wyświetlmy ilość wszystkich albumów oraz nazwę pierwszego z nich.
// Z pobranych zdjęć wyświetlmy wszystkie tytuły.
// Pamiętajmy również o tym aby obsłużyć błędy zapytania łapiąc występujący wyjątek
// (.catch())
// endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2
// endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId=2
// endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId=1
// Ćwiczenie to ma za zadanie pokazać jak działają tzw. `chain Promise`(łańcuch ‘obietnic’).

const axios = require ('axios');

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
        return imagesTitles;
    })
    .catch(error => console.log("error" + error.message))
    .finally(console.log('Koniec działania aplikacji'));
