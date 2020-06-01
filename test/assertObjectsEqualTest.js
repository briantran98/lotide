const assertObjectsEqual = require('../assertObjetsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ba2 = { b: "2", a: "2" };

const person1 = {name: "brian", address: {city: "vancouver"}};
const person2 = {name: "brian", address: {city: "vancouver"}};
const person3 = {name: "brian", address: {city: "kelowna"}};


assertObjectsEqual(person1, person2);
assertObjectsEqual(person1, person3);
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, ba2);