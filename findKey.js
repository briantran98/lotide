const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, cb) {
  for (const x in obj) {
    if (cb(obj[x])) {
      return x;
    }
  }
};

const planet = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const person = {
  name: "Brian",
  phoneNumber: "604193450",
  address: "Somewhere in the world" 
};

const key1 = findKey(planet, x => x.stars === 2); // => "noma"
const key2 = findKey(planet, x => x.stars === 1); // => "Blue Hill"
const key3 = findKey(planet, x => x.stars === 3); // => "Akaleri"
const key4 = findKey(person, x => x === "Brian");

assertEqual(key1, "noma");
assertEqual(key2, "Blue Hill");
assertEqual(key3, "Akaleri");
assertEqual(key4, "name");