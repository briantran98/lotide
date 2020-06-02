const assert = require('chai').assert
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe('#countOnly', () => {
  it('returns 1 for Jason', () => {
    const actual = result["Jason"];
    const expect = 1;
    assert.strictEqual(actual, expect);
  });
  it('returns undefined for Karima', () => {
    const actual = result["Karima"];
    const expect = undefined;
    assert.strictEqual(actual,expect);
  });
  it('returns 2 for Fang', () => {
    const actual = result["Fang"];
    const expect = 2;
    assert.strictEqual(actual,expect);
  });
});