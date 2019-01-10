// 3. Wykorzystując składnię async stwórzmy funkcję zwracającą nasz pierwszy Promise i wyświetlmy na
// ekranie hello world!.
// // my func ... etc...
// myFunc()
//  .then(result => {
//  console.log(result);
//  });

async function myFunc() {
    return 'Hello World!';
}

myFunc().then(result => console.log(result));