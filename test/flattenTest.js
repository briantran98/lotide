const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [ 1, 2, 3, 4, 5, 6 ];
    assert.deepEqual(actual, expected)
  });
    it('should return [1, 2, 3, 4, 5, 6] for [[1, 2, [[3], 4], 5, [6]]]', () => {
    const actual = flatten([[1, 2, [[3], 4], 5, [6]]]);
    const expected = [ 1, 2, 3, 4, 5, 6 ];
    assert.deepEqual(actual, expected)
  });
});

