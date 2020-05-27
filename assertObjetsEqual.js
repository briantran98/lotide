const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}  

const eqObjects = function (obj1, obj2) {
  let same = false;
  const size1 = Object.keys(obj1).length;
  const size2 = Object.keys(obj2).length;
  if (size1 === size2) {
    for (const key in obj1) {
      console.log(key)
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        same = eqArrays(obj1[key], obj2[key]);
      } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        same = eqObjects(obj1[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        same = true;
      } else {
        return false;
      }
    }
  };
  return same;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ba2 = { b: "2", a: "2" };

const person1 = {name: "brian", address: {city: {zip: ""}}}
const person2 = {name: "brian", address: {city: {zip: ""}}}

assertObjectsEqual(person1, person2);
assertObjectsEqual(ab, ba); 