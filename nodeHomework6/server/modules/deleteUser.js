const axios = require("axios");
const { getUser } = require('./getUser');

function deleteUser(id){
    axios.delete(`http://localhost:4800/users/${id}`)
        .then(getUser(id))
        .catch(function (error) {
            if (error) {
                console.log("Użytkownik usunięty");
            }
        });
}

module.exports = {
    deleteUser,
}