const assert = require('chai').assert
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it('return drama for "The Wire"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";
    assert.equal(actual,expected);
  });
  it('return undefined for "The 70\'s show"', () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The 70\'s Show");
    const expected = undefined;
    assert.equal(actual,expected);
  });
});