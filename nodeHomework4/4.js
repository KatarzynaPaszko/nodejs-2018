// 4. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki `request` i
// pobierzmy użytkownika dane(https://jsonplaceholder.typicode.com/users/2). Przeróbmy tak
// wywołanie naszego zapytania aby wykorzystywało Promise zamiast Callback:
// function getUser(id) {
// const url = ...
// return ... <---- implementacja Promise...
// }
// getUser(2)
// .then(user => ...)
// .catch(error => ...)

const request = require ('request');

function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    return new Promise ((resolve, reject) => {
        
        request(url, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                reject('user not found');
            } else {
                resolve(JSON.parse(body));
            };     
          });   
    })   
}

getUser(2)
    .then(user => console.log(user.name))
    .catch(error => console.log(error));

getUser(12)
    .then(user => console.log(user.name))
    .catch(error => console.log(error));

getUser(4)
    .then(user => console.log(user.name))
    .catch(error => console.log(error));