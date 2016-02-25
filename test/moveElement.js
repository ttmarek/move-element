'use strict'
const test = require('tape')
const moveElement = require('../index.js')

test('moveElement', assert => {
  const fruits = ['Oranges', 'Apples', 'Bananas', 'Pineapples']
  const animals = ['Danger Noodle', 'Word Bank', 'Beach Chicken']
  const isApple = string => string === 'Apples'
  assert.deepEqual(moveElement(fruits, isApple, 0),
                   ['Apples', 'Oranges', 'Bananas', 'Pineapples'])
  assert.deepEqual(moveElement(fruits, isApple, 2),
                   ['Oranges', 'Bananas', 'Apples', 'Pineapples'])
  assert.deepEqual(moveElement(fruits, isApple, fruits.length - 1),
                   ['Oranges', 'Bananas', 'Pineapples', 'Apples'])
  assert.deepEqual(moveElement(fruits, isApple, 17),
                   ['Oranges', 'Apples', 'Bananas', 'Pineapples'],
                   "Returns the original array if the given index is out of range")
  assert.deepEqual(moveElement(fruits, isApple, -1),
                   ['Oranges', 'Apples', 'Bananas', 'Pineapples'],
                   "Returns the original array if the given index is out of range")
  assert.deepEqual(moveElement(animals, isApple, 2),
                   ['Danger Noodle', 'Word Bank', 'Beach Chicken'],
                   "Returns the original array if the element isn't found")
  assert.end()
})
