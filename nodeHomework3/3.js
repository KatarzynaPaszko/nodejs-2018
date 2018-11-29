// 3. Bazując na zadaniu 2 zabezpieczmy naszą aplikację tak aby w przypadku błędu
// odczytu pliku(zła nazwa pliku/inny rodzaj błędu) poinformowała użytkownika o
// problemie w konsoli.

const fs = require('fs');

function callbackReadFileFunction(err, data){
    let user;
    if(err) {
        console.log("Error reading data !");
    } 
    if (data) {
        user = JSON.parse(data)
    }
    console.log(user.lastname);
}

fs.readFile('user.json', callbackReadFileFunction);
// fs.readFile('errorFile.json', callbackReadFileFunction);