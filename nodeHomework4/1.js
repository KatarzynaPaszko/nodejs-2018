// 1. Stwórzmy pierwszy nasz obiekt Promise, który zwróci nam w rezultacie `Hello world!`
// const myPromise = ... <------ stworzenie obiektu Promise i logiki
// myPromise.then(result => {
//  console.log(result);
// });


const myPromise = new Promise ((resolve, reject) => {
    resolve ('hello World');
})

myPromise.then(result => {
 console.log(result);
});
