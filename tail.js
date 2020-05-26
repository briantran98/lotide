const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`;
  }
};

const tail = function(array) {
  let newArray = [];
  
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!
console.log(assertEqual(tail(words)[0], "Lighthouse"));
console.log(assertEqual(tail(words).length, 2));
console.log(assertEqual(tail(words)[0], "Labs"));



