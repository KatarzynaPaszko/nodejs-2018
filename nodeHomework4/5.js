// 5. Zmodyfikujmy zadanie 4 tak aby pobrać kilku użytkowników w tej samej chwili wykorzystując
// `Promise.all()`. Wyświetlmy ich imiona w konsoli. (id użytkowników: 2,3,5,7,8,10).
// Poinformujmy iż nasz Promise został w pełni rozwiązany.
// Promise.all([getUser(), ...])
// .then(...)
// .catch(...)
// .finally(...);


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

const userIds = [2, 3, 5, 7, 8, 10];

const allPromises = userIds.map(id => getUser(id));

Promise.all(allPromises)
    .then(usersList => {
        usersList.forEach(user => {
            console.log(user.name)
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Koniec pobierania danych"));

