# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @btran210/lotide`

**Require it:**

`const _ = require('@btran210/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return the first element of the array
* `tail(array)`: takes an array and returns a new array without the first element of the original array
* `middle(array)`: takes in an array and returns a new array with the middle elements of the array
* `flatten(array)`: takes in array of any size nested array and returns a non nested array
* `countOnly(array, object)`: takes in an array and object and returns an object with key values with numbers. Object has key of what you want to keep track of in the array and boolean value set to true if you want to count that key
* `letterByPosition(string)`: returns an object with key of all the characters in the string and value of how many times they occur
* `findKeyByValue(object, string)`: object that you want to search through and string is the value of the key you want to find. Returns a string value for the key
* `eqObjects(object1, object2)`: returns true if object1 and object2 have identical values.
* `eqArrays(array1, array2)`: returns true if array1 and array 2 have identical values.
