// 2. Stwórzmy Promise wykorzystujący funkcję `setTimeout` która wykona się po 5 sekundach i
// rozwiąże nasz Promise z naszym przywitaniem `Hello world!`

const myPromise = new Promise ((resolve, reject) => {
    setTimeout( () => { 
        resolve ('hello World');
    }, 5000);

    
})

myPromise.then(result => {
 console.log(result);
});