// 1. Stwórzmy aplikację która stworzy nowego użytkownika wysyłając odpowiednie zapytanie do naszego lokalnego serwera.
// Model użytkownika:

// {
//     "name": "...",
//     "username": "...",
//     "email": "...",
// }
// Wyświetlmy informację czy poprawnie użytkownik został zapisany i jaki otrzymał id.

const axios = require("axios");

function addUser(name, username, email){
    axios.post('http://localhost:4800/users', {
        name: name,
        username: username,
        email: email
      })
      .then(function (response) {
        console.log("Użytkownik zapisany poprawnie do bazy danych. Jego id: " + response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
}

addUser("Flinston22", "Jackson2", "email@email.com");