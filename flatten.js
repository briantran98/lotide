const flatten = function(source) {
  const array = [];
  for (let i = 0; i < source.length; i++) {
    if(Array.isArray(source[i])) {
      for (let j = 0; j < source[i].length; j++) {
        array.push(source[i][j]);
      }
    } else {
      array.push(source[i]);
    }
  }
  return array;
}


console.log(flatten([1, 2, [3, 4], 5, [6]]))