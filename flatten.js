const flatten = function(source) {
  const array = [];
  for (const element of source) {
    if (Array.isArray(element)) {
      const recurvArray = flatten(element);
      for (const item of recurvArray) {
        array.push(item);
      }
    } else {
      array.push(element);
    }
  }
  return array;
};

module.exports = flatten;