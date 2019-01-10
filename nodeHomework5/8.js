// 8. Wykorzystując składnię async/await zmodyfikujmy zadanie 7 tak aby pobrać kilku użytkowników w tej
// samej chwili wykorzystując Promise.all(). Wyświetlmy ich imiona w konsoli. (id użytkowników:
// 2,3,5,7,8,10).


const axios = require('axios');

async function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
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