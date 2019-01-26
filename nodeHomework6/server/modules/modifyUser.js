const axios = require("axios");

function modifyUser(id, data){
    axios.patch(`http://localhost:4800/users/${id}`, {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
      }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
      .then(function (response) {
        console.log("Dane użytkownika zostały zmienione w bazie danych" );
        console.log(response.data);        
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = {
    modifyUser,
}