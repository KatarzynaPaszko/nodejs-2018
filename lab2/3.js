// 3. Stworzyć aplikację która porówna dwie tablice i wyświetli w konsoli różnicę miedzy
// nimi.
// const tabA = ['ala', 'ma', 'kota']
// const tabB = ['ala', 'ma', 'psa']
// Wykorzystać zainstalowaną bibliotekę 'lodash'.

const _ = require('lodash');
const tabA = ['ala', 'ma', 'kota']
const tabB = ['ala', 'ma', 'psa']

let difference1 = _.differenceWith(tabA, tabB);
let difference2 =_.differenceWith(tabB, tabA);
let allDifferences = difference1.concat(difference2);

console.log(allDifferences);