// 4. Dodajmy do naszej aplikacji usuwanie użytkownika z serwera. 
// Sprawdźmy czy nasz użytkownik został usunięty wysyłając zapytanie o pobranie danych.

const { getUser } = require('./modules/getUser');
const { addUser } = require('./modules/addUser');
const { modifyUser } = require('./modules/modifyUser');
const { deleteUser } = require('./modules/deleteUser');


// getUser(11);

// addUser("Anna", "Przybylska", "email@email.com");

// modifyUser(1, "Jerzy", "Owsiak", "Orkiestra@mail.com");

deleteUser(2);