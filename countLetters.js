const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  for (const char of str) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results;
};

const result1 = countLetters("what about this");

assertEqual(result1["a"], 2);