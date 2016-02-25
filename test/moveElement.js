'use strict'
const test = require('tape')
const moveElement = require('../index.js')

test('moveElement', assert => {
  const fruits = ['Oranges', 'Apples', 'Bananas', 'Pineapples']
  const isApple = string => string === 'Apples'
  assert.qual(moveElement(fruits, isApple, 0),
               ['Apples', 'Oranges', 'Bananas', 'Pineapples'])
  assert.equal(moveElement(fruits, isApple, 2),
               ['Oranges', 'Bananas', 'Apples', 'Pineapples'])
  assert.equal(moveElement(fruits, isApple, fruits.length - 1),
               ['Oranges', 'Bananas', 'Pineapples', 'Apples'])
})
