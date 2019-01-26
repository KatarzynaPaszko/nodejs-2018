// 2. Dodajmy do zadania 1 funkcjonalność pozwalającą na pobranie użytkownika. 
//    Już na tym etapie powinniśmy podzielić naszą aplikację na odpowiednie moduły.

const { getUser } = require('./modules/getUser');
const { addUser } = require('./modules/addUser');


getUser(11);

addUser("Anna", "Przybylska", "email@email.com");