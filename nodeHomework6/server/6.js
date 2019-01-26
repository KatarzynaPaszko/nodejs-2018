// 6. Rozszerzmy naszą aplikację o dodawanie, usuwanie oraz modyfikowanie postów analogicznie jak zrobiliśmy z użytkowników.
// > Pamiętajmy o zachowaniu czystości kodu i podzieleniu naszej aplikacji na odpowiednie moduły.
// > Przed dodaniem nowego `posta` upewnijmy się że dany użytkownik istnieje na naszym serwerze.

const argv = require('yargs').argv;
const { userDataModel } = require('./modules/userDataModel');

function serverTask(funcName) {    
    const user = userDataModel();    
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

const func = process.argv[2];
serverTask(func); 


    // const name = argv.name;
    // const lastname = argv.lastname;
    // const id = argv.id;
    // const email = argv.email;
    
    // let user = {
    //     name: name,
    //     lastname: lastname,
    //     email: email,
    //     id: id
    // }