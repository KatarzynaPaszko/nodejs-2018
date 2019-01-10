// 1. W katalogu 01 znajduje się plik user.json. Wykorzystując wiedzę z poprzednich zajęć, stwórzmy
// aplikację wczytującą naszego użytkownika z pliku i zamieńmy go na obiekt JS oraz wyświetlmy w
// konsoli jego imię.
// Użyjmy w tym zadaniu funkcję readFileSync z wbudowanego modułu fs oraz funkcję JSON.parse do
// przeparsowania wczytanej zawartości do obiektu.
// Zabezpieczmy naszą aplikację tak aby wyłapać błąd prasowania lub odczytu pliku i poinformujmy o tym
// użytkownika.

const { readFileSync } = require('fs');

try {
    const data = readFileSync('user.json');
    const user = JSON.parse(data);
    console.log(user.name);
} catch(error) {
    console.log(error.message);
}