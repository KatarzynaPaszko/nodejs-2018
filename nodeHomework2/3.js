// 3. Stworzyć aplikację która porówna dwie tablice i wyświetli w konsoli różnicę miedzy
// nimi.
// const tabA = ['ala', 'ma', 'kota']
// const tabB = ['ala', 'ma', 'psa']
// Wykorzystać zainstalowaną bibliotekę 'lodash'.
const _ = require('lodash');

const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

let tabWithDiffA = _.difference(tabA, tabB);
console.log(tabWithDiffA);
let tabWithDiffB = _.difference(tabB, tabA);
console.log(tabWithDiffB);

let tab = tabWithDiffA.concat(tabWithDiffB);
console.log(tab);
