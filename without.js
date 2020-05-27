const exists = function (value, array) {
  for (let i = 0; i < array.length; i++) { 
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

const without = function (source, itemsToRemove) {
  const array = [];
  for (let i = 0; i < source.length; i++) {
    if (!exists(source[i], itemsToRemove)) {
      array.push(source[i]);
    }
  }
  return array;
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`;
  }
};

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


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual(without([1,2,3], [1,2]), [3]));
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]