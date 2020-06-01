const middle = function(array) {
  const middleArray = [];
  let middleIndex = 0;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleIndex = (array.length / 2);
      middleArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      middleIndex = Math.floor(array.length / 2);
      middleArray.push(array[middleIndex]);
    }
  }
  return middleArray;
};

module.exports = middle;