const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log( `🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log( `🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
    }
  }
  console.log( `✅✅✅ Assertion Passed: ${array1} === ${array2}`);
}

const letterPositions = function(str) {
  const results = {};
  let index = 0
  for (const char in str) {
    if (str[char] !== " ") {
      if(results[str[char]]) {
        results[str[char]].push(index);
      } else {
        results[str[char]] = [index];
      };
      index++;
    };
  };
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




