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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const wordsExpected1 = ["ground", "control", "to", "major", "tom"];
const wordsExpected2 = ["hello ground", "hello control", "hello to", "hello major", "hello tom"];
const numbers = [10, 20, 30, 40];
const numbersExpected = [20, 40, 60, 80]


const resultWords1 = map(words, word => word);
assertArraysEqual(resultWords1, words);

const resultWords2 = map(words, word => "hello " + word);
assertArraysEqual(wordsExpected2, resultWords2);

const resultNumbers = map(numbers, word => word * 2);
assertArraysEqual(resultNumbers, numbersExpected);