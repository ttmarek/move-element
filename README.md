# move-element #
[![npm version](https://badge.fury.io/js/move-element.svg)](https://badge.fury.io/js/move-element)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Move an array element to a given position.

## Install ##

``` shell
    npm install --save --save-exact move-element
```

## Usage ##

``` javascript
    const moveElement = require('move-element')
    // Say you have an array of fruits
    const fruits = ['Oranges', 'Apples', 'Bananas', 'Pineapples']
    // And you want to swap the positions of 'Apples' and 'Bananas'
    // First you make a function that returns true for the element you want to move
    const isApples = (x) => x === 'Apples'
    // Then you call moveElement with the index you want to move the element to
    const newArray = moveElement(fruits, isApple, 2)
    // Then newArray will be set to:
    // ['Oranges', 'Bananas', 'Apples', 'Pineapples']
```
