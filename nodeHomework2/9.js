// 9. Rozszerzmy aplikacje z pkt.8 o zapis asynchroniczny naszego użytkownika do pliku i
// wyświetlmy komunikat o poprawnej operacji.

const request = require('request');
const fs = require('fs');

const requestOptions = {
    headers: {
        'User-Agent': 'request'
    }
};

request('https://api.github.com/users/KatarzynaPaszko', requestOptions ,function (error, response, body) {
  if (body) {
    fs.writeFile('git.txt', body, function(writeError){
      if (!writeError) {
        console.log('data saved');
      }
    })
  }
});
