// 5. Stworzenie aplikacji pobierającej argument podany podczas uruchamiania aplikacji 
//     > node app.js jakis_argument 
    
//     Zmodyfikuj aplikację `hello world` tak aby pobierał dane wejściowe z argumentu i w 
//     przypadku podania 1 argumentu podmieniał słowo `world` na ten argument. np. 
//     node app.js 
//     > hello world! 
    
//     node app.js Jan 
//     > hello Jan! 

welcomeMessage = (arg) => {
    let message = 'Hello ';
    if (arg) {
        message = message + arg + '!';
    } else {
        message = message + 'World!';
    }
    console.log(message);
}

const myCommand = process.argv[2];

welcomeMessage(myCommand);