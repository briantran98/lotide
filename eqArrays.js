const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} !== ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  let same = false;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      same = eqArrays(array1[i], array2[i])
    } else {
      same = false;
    }
    if (array1[i] === array2[i]) {
      same = true;
    }
  }
  return same
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),  true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),  true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false

