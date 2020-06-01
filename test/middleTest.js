const assert = require('chai').assert;
const middle = require('../middle');

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const numbers2 = [1, 2, 3, 4, 5, 6, 7];
const numbers3 = [1, 2, 3, 4, 5, 6];
const numbers4 = [1, 2, 3, 4, 5];

describe('#middle', () => {
  it('return 4 for [1, 2, 3, 4, 5, 6, 7]', () => {
    const actual = middle(numbers2);
    const expected = [4];
    assert.deepEqual(actual, expected);
  });
  it('return 4 for [1, 2, 3, 4, 5]', () => {
    const actual = middle(numbers4);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });
  it('return 4 for [1, 2, 3, 4, 5, 6]', () => {
    const actual = middle(numbers3);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });
  it('return 4 for [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    const actual = middle(numbers1);
    const expected = [4, 5];
    assert.deepEqual(actual, expected);
  });
});