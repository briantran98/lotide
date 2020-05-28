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

const letterPositions = function(str) {
  const results = {};
  let index = 0;
  for (const char in str) {
    if (str[char] !== " ") {
      if (results[str[char]]) {
        results[str[char]].push(index);
      } else {
        results[str[char]] = [index];
      }
      index++;
    }
  }
  return results;
};

const results1 = letterPositions("hello howdy");


assertArraysEqual(results1["h"], [0, 5]);
assertArraysEqual(results1["e"], [1]);
assertArraysEqual(results1["l"], [2, 3]);
assertArraysEqual(results1["o"], [4, 6]);
assertArraysEqual(results1["w"], [7]);
assertArraysEqual(results1["d"], [8]);
assertArraysEqual(results1["y"], [9]);




