const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe('#tail', () => {
  it('returns 3 for the length of the original array after calling tail', () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it('returns "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const actual = tail(words)[0];
    const expected = 'Lighthouse';
    assert.strictEqual(actual, expected);
  });
  it('returns 2 length for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const actual = tail(words).length;
    const expected = 2;
    assert.strictEqual(actual, expected);
  });
  it('returns "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const actual = tail(words)[1];
    const expected = 'Labs';
    assert.strictEqual(actual, expected);
  });
});



/* // Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[1], "Labs"); */