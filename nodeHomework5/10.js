// 10. Stwórzmy aplikację która pobierze informację o użytkowniku i statystykach jego postów i komentarzy.
// Z pobranego użytkownika wyświetlmy na ekranie nazwę użytkownika oraz email.
// Pobierzmy wszystkie posty użytkownika i wyświetlmy ich ilość w konsoli.
// Dodatkowo sprawdźmy aktywność szukanego użytkownika w komentarzach i wyświetlmy łączną ilość
// komentarzy w konsoli.
// Endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/2
// Endpoint do postów: https://jsonplaceholder.typicode.com/posts?userId=2
// Endpoint do komentarzy: https://jsonplaceholder.typicode.com/comments?postId=11


const axios = require('axios');

async function getUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return axios(url).then(response => response.data)
}

async function getPosts(id) {
    const url = ` https://jsonplaceholder.typicode.com/posts?userId=2`;
    return axios(url).then(response => response.data) 
}

async function getComments(id) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=11`;
    return axios(url).then(response => response.data) 
}

(async function () {
    try {
        const result = await getUser(2);
        console.log(result.name);
        console.log(result.email);
        const posts = await getPosts(result.id);
        console.log("Ilość postów: " + posts.length);
        const comments = await getComments(result.id);
        console.log("Ilość komentarzy: " + comments.length);
    } catch(error) {
        console.log(error.message);
    }
})();