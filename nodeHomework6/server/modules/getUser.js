const axios = require("axios");

function getUser(id){
    axios.get(`http://localhost:4800/users?id=${id}`)
    .then(function (response) {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log("User with thi id doeas not exist ");
        
        console.log(error.message);
    })
    .then(function () {
        // always executed
    });
}

module.exports = {
    getUser,
}