const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ba2 = { b: "2", a: "2" };
const abc = { a: "1", b: "2", c: "3" };
const dc = { d: ["2", 3], c: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const azb = { a: { z: 1 }, b: 2 };
const azb2 = { a: { z: 1 }, b: 2 };
const ayzb = {a: { y: 0, z: 1 }, b: 2 }


describe('#eqObjects', () => {
  it('returns true with {a: "1", b: "2"} and { b: "2", a: "1" }', () => {
    const test = eqObjects(ab, ba)
    assert.isTrue(test)
  });
  it('returns false with {a: "1", b: "2"} and { b: "2", a: "2" }', () => {
    const test = eqObjects(ab, ba2)
    assert.isFalse(test)
  });
  it('returns false with {a: "1", b: "2"} and { a: "1", b: "2", c: "3" }', () => {
    const test = eqObjects(ab, abc)
    assert.isFalse(test)
  });
  it('returns true with { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const test = eqObjects(cd, dc)
    assert.isTrue(test)
  });
  it('returns false with { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const test = eqObjects(cd, cd2)
    assert.isFalse(test)
  });
  it('returns false with { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const test = eqObjects(cd, cd2)
    assert.isFalse(test)
  });
  it('returns false with { a: { y: 0, z: 1 }, b: 2 } and { c: "1", d: ["2", 3, 4] }', () => {
    const test = eqObjects(ayzb, azb)
    assert.isFalse(test)
  });
  it('returns true with { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    const test = eqObjects(azb2, azb)
    assert.isTrue(test)
  });
});
