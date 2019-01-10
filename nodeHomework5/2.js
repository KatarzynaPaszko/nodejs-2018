// 2. Stwórzmy aplikację która będzie posiadała funkcję dzielenia 2 liczb.
// Jak wiadomo JS jest ciekawym językiem, który pozwala dzielić przez 0... efektem dzielenia przez zero jest
// wartość Infinity, np.:
// const result = 2 / 0;
// console.log(result); // => Infinity
// Zabezpieczmy naszą aplikację tak aby funkcja dzielenia rzucała wyjątkiem w przypadtku gdy drugi parametr
// ma wartość 0 (np. new Error('divide by 0')).
// Oczywiście stwórzmy przykładowe wywołanie naszej funkcji z blokiem try..catch.

function divide(a,b){
    if (b===0) {
        throw new Error('divide by 0!')
    }
    return a / b;
}

try {
    const resultA = divide(2,4);
    console.log('result A ', resultA);

    const resultB = divide(2,0);
    console.log('result B ', resultB);

    const resultC = divide(8,4);
    console.log('result C ', resultC);
    
} catch(error) {
    console.log(error);
}