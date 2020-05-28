const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: ${actual} === ${expected}`);
  }
};

const flatten = function(source) {
  const array = [];
  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      for (let j = 0; j < source[i].length; j++) {
        array.push(source[i][j]);
      }
    } else {
      array.push(source[i]);
    }
  }
  return array;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);