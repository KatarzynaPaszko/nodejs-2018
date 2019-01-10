// 7. Dodajmy do naszego zadania 6 obsługę błędów try..catch.

const axios = require('axios');

async function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
}

(async function () {
    try {
        const result = await getUser(22);  // błędny id
        console.log(result.name);
    } catch(error) {
        console.log(error.message);
    }
})();