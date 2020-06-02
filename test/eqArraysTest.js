const assert = require('chai').assert
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('return true for [1, 2, 3] being [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('return false for [1, 2, 3], [3, 2, 1]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it('return true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it('return false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
});