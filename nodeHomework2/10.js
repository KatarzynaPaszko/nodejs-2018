// 10. Rozszerzmy aplikację z pkt.8 o wprowadzanie loginu poprzez parametr, np.:
// > node app.js --login=piotar

const request = require('request');
const argv = require('yargs').argv;

const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

const login = argv.login;

if (login) {
  let url = 'https://api.github.com/users/'+ login;
  let name = request(url, requestOptions ,function (error, response, body) {
    console.log('body:', body);
  });
  console.log(name);
}
