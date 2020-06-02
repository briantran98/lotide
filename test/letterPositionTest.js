const assert = require('chai').assert;
const letterPositions = require('../letterPosition');

describe('#letterPositions', () => {
  it('returns 0, 5 at key h for  "hello howdy"', () => {
    const actual = letterPositions("hello howdy")["h"]
    const expected = [0, 5]
    assert.deepEqual(actual, expected)
  });
  it('returns empty object for no value ', () => {
    const actual = letterPositions();
    const expected = {};
    assert.deepEqual(actual, expected)
  });
  it('returns empty object for empty string with white spaces"           " ', () => {
    const actual = letterPositions('           ');
    const expected = {};
    assert.deepEqual(actual, expected)
  });
});