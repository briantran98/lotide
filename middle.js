const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return `🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`;
    }
  }
  return `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`;
  }
};

const middle = function(array) {
  const middleArray = [];
  if (array.length > 2) {
    if(array.length % 2 === 0) {
      const middleIndex = (array.length / 2);
      middleArray.push(array[middleIndex -1], array[middleIndex]);
    } else {
      const middleInedx = Math.floor(array.length / 2);
      middleArray.push(array[middleInedx]);
    }
  }
  return middleArray;
};

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const numbers3 = [1, 2, 3, 4, 5, 6];
const numbers4 = [1, 2, 3, 4, 5];


console.log(assertArraysEqual(middle(numbers2), [4]));
console.log(assertArraysEqual(middle(numbers4), [3]));
console.log(assertArraysEqual(middle(numbers3), [3,4]));
console.log(assertArraysEqual(middle(numbers1), [4,5]));