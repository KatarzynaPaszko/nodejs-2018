// 4. Wykorzystując bibliotekę 'lodash' znaleźć minimalną oraz maksymalną wartość w
// tablicy:
// [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8]


const _ = require('lodash');
let array = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];

let min = _.min(array);
let max = _.max(array);
console.log(min);
console.log(max);
