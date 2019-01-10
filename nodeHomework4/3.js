// 3. Stwórzmy aplikację która będzie odejmowała 2 liczby. Wykorzystując `Promise` dodajmy
// regułę jeżeli wynik odejmowania będzie niższy niż 0 ma zwrócić błąd z informacją(rejected),
// jeżeli rezultat będzie dodatni ma zwrócić wynik.
// function sub(a, b) {
// return ... <------ stworzenie obiektu Promise i logiki
// }
// sub(1, 3).then(
// result => ...,
// error => ...
// );

function sub(a, b) {
    // return a - b;
    return new Promise ((resolve, reject) => {
        const result = a - b;
        if (result > 0) {
            resolve(result);
        } else {
            reject('błąd/przyczyna błędu itp...');
        }       
    })
}

// sub(5, 3).then(
//     result => console.log(result),
//     error => console.log(error)
// );

// lub

sub(1, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error)
);