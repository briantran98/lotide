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

module.exports = eqArrays;