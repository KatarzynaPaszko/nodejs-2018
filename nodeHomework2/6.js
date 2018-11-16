// 6. Stworzyć aplikacje która wyświetli na ekranie przywitanie użytkownika po 5
// sekundach od uruchomienia aplikacji.
// Wykorzystaj tutaj wiedzę z poprzednich zajęć (podpowiedź: moduł ‘os’, funkcja userInfo())
// oraz funkcję(setTimeout()) która pozwala na wrzucenie naszej funkcji do node api.


const os = require('os');

function hello(){
  const username = os.userInfo().username;
  console.log('Hello ' + username);
}

function sayHello() {
  let sayHello = setTimeout(hello, 5000)
  return  sayHello
}

sayHello();
