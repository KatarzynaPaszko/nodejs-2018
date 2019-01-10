// 4. Stwórzmy aplikację która będzie posiadała funkcję asynchroniczną dodawnia 2 liczb do siebie. Jeżeli
// wynik będzie liczbą parzystą powinniśmy wyrzucić błąd i poinformować użytkownika o tym fakcie.
// // my func ... etc...
// add(4, 5)
//  .then( ... )
//  .catch( ... );


async function add(a, b) {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error("Wynik dodawania jest parzysty!");
    }
    return result;
}


add(4, 5)
 .then(result => console.log(result))
 .catch(error => console.log(error.message));

add(4, 4)
.then(result => console.log(result))
.catch(error => console.log(error.message));

add(4, 5)
 .then(result => console.log(result))
 .catch(error => console.log(error.message));