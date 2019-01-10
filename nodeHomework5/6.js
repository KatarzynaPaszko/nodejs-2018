// 6. Wykorzystując wiedzę z poprzednich zajęć użyjmy zewnętrznej biblioteki axios i pobierzmy
// użytkownika dane wykorzystując składnię async/await.
// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2

const axios = require('axios');

async function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
}

(async function () {
    try {
        const result = await getUser(2);
        console.log(result.name);
    } catch(error) {
        console.log(error);
    }
})();