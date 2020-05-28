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
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const middle = function(array) {
  const middleArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      const middleIndex = (array.length / 2);
      middleArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      const middleInedx = Math.floor(array.length / 2);
      middleArray.push(array[middleInedx]);
    }
  }
  return middleArray;
};

// Test Cases
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const numbers3 = [1, 2, 3, 4, 5, 6];
const numbers4 = [1, 2, 3, 4, 5];

console.log(assertArraysEqual(middle(numbers2), [4]));
console.log(assertArraysEqual(middle(numbers4), [3]));
console.log(assertArraysEqual(middle(numbers3), [3,4]));
console.log(assertArraysEqual(middle(numbers1), [4,5]));