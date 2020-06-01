const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const numbers3 = [1, 2, 3, 4, 5, 6];
const numbers4 = [1, 2, 3, 4, 5];

assertArraysEqual(middle(numbers2), [4]);
assertArraysEqual(middle(numbers4), [3]);
assertArraysEqual(middle(numbers3), [3,4]);
assertArraysEqual(middle(numbers1), [4,5]);