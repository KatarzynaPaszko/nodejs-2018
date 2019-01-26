// 3. Dodajmy do zadania 2 możliwość modyfikowania naszego użytkownika i wysłania zmian na nasz serwer.

const { getUser } = require('./modules/getUser');
const { addUser } = require('./modules/addUser');
const { modifyUser } = require('./modules/modifyUser');


// getUser(11);

// addUser("Anna", "Przybylska", "email@email.com");

modifyUser(1, "Jerzy", "Owsiak", "Orkiestra@mail.com");