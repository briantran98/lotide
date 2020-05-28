const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("lighthouse", "lighthouse");
assertEqual("lighthouse", "light");

assertEqual("lighthouse", "lighthouse");
assertEqual(5, "lighthouse");

assertEqual(123, 123);
assertEqual("123", 123);