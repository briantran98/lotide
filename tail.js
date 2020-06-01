const tail = function(array) {
  let newArray = array.filter( (element) => element !== array[0]);
  return newArray;
};

module.exports = tail;