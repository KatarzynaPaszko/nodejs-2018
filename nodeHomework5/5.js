// 5. Zmodyfikujmy nasze zadanie 4 tak aby zamiast .then..catch użyć await.

async function add(a, b) {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error("Wynik dodawania jest parzysty!");
    }
    return result;
}

(async function () {
    try {
        const result = await add(2,5);
        console.log(result);
    } catch(error) {
        console.log(error);
    }

    try {
        const result = await add(2,2);
        console.log(result);
    } catch(error) {
        console.log(error);
    }

})();

// add(4, 5)
//  .then(result => console.log(result))
//  .catch(error => console.log(error.message));

// add(4, 4)
// .then(result => console.log(result))
// .catch(error => console.log(error.message));

// add(4, 5)
//  .then(result => console.log(result))
//  .catch(error => console.log(error.message));