const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([3,2,1], [3,2,1]);
assertArraysEqual([], []);
assertArraysEqual(["1","2","3"], ["1","2","3"]);