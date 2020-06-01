const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  let same = false;
  const size1 = Object.keys(obj1).length;
  const size2 = Object.keys(obj2).length;
  if (size1 === size2) {
    for (const key in obj1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        same = eqArrays(obj1[key], obj2[key]);
      } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        same = eqObjects(obj1[key], obj2[key]);
        if(!same) {
          return false;
        }
      } else if (obj1[key] === obj2[key]) {
        same = true;
      } else {
        return false;
      }
    }
  }
  return same;
};

module.exports = eqObjects;
