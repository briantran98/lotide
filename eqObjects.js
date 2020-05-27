const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (obj1, obj2) {
  let same = false;
  const size1 = Object.keys(obj1).length;
  const size2 = Object.keys(obj2).length;
  if (size1 === size2) {
    for (const key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        same = eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        same = true;
      } else {
        return false;
      }
    }
  };
  return same;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ba2 = { b: "2", a: "2" };

console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, ba2));


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3, 4], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
