const axios = require("axios");

function addUser(){
    const { userDataModel } = require('./userDataModel');
    const user = userDataModel();   

    axios.post('http://localhost:4800/users', user)
      .then(function (response) {
        console.log("Użytkownik zapisany poprawnie do bazy danych. Jego id: " + response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = {
    addUser,
}