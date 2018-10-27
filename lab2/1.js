// 1. Stworzyć aplikację która pozbędzie się zduplikowanych 
// danych w tablicy
// Dane w tablicy:
// ['ala', 3, 'ma', 'kota', 1, 'ala', 1, 4, 3]
// W konsoli powinna zostać wyświetlona tablica bez 
// zduplikowanych wartości:
// ['ala', 3, 'ma', 'kota', 1, 4]
// W tym zadaniu wykorzystać zewnętrzną bibliotekę 'lodash'
// (https://www.npmjs.com/package/lodash)

const _ = require('lodash');
let array = ['ala', 3, 'ma', 'kota', 1, 'ala', 1, 4, 3];

let arrayWithNoDuplicates = _.uniq(array);

console.log(arrayWithNoDuplicates);