const letterPositions = function(str) {
  const results = {};
  let index = 0;
  for (const char in str) {
    if (str[char] !== " ") {
      if (results[str[char]]) {
        results[str[char]].push(index);
      } else {
        results[str[char]] = [index];
      }
      index++;
    }
  }
  return results;
};

module.exports = letterPositions;