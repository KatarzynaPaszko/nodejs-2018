// 5. Wykorzystując wiedzę z poprzednich zajęć dodajmy możliwość dodawania oraz usuwania 
// użytkownika poprzez argumenty uruchamiane naszą aplikację(`yargs`, itp...).
// `node app.js delete --id 2`
// `node app.js add --name "..." ...`
// `node app.js getUser ...`
// Zachęcam do zapoznania się z dokumentacją pakietu `yargs`. (commands, itp...)


const argv = require('yargs').argv;

const func = process.argv[2];

function serverTask(funcName) {    
    const name = argv.name;
    const lastname = argv.lastname;
    const id = argv.id;
    const email = argv.email;
    
    let user = {
        name: name,
        lastname: lastname,
        email: email,
        id: id
    }

    switch(funcName) {
        case 'getUser':
            const { getUser } = require('./modules/getUser');      
            getUser(user.id);
            break;
        case 'addUser':
            const { addUser } = require('./modules/addUser');
            addUser(user)
            break;
        case 'modifyUser':
            const { modifyUser } = require('./modules/modifyUser');
            modifyUser(...user);
            break;
        case 'deleteUser':
            const { deleteUser } = require('./modules/deleteUser');
            deleteUser(user.id)
            break;
        default:
            console.log("Incorrect name of function or parameters");
            break;
      }
}

serverTask(func); 