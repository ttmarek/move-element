'use strict'

module.exports = moveElement

/**
 * Returns a new array with a given element moved to a certain index.
 * @param {Array} arr An array of elements that you want to rearrange.
 * @param {Function} isElement A function that returns true when passed
 * the element you want to move.
 * @param {Integer} index The index you want to move the element to.
 */
function moveElement(arr, isElement, index) {
  var maxIndex = arr.length - 1
  // Return the original array if the given index isn't valid
  if (index > maxIndex || index < 0) {
    return arr
  }
  // Find the element's current index in the array
  var currentIndex = (function () {
    for (var i = 0; i <= maxIndex; i++) {
      if (isElement(arr[i])) {
        return i
      }
    }
    return -1
  })()
  // If the element isn't in the array return the original
  if (currentIndex === -1) {
    return arr
  }
  var arrCopy = arr.slice()                        // make a copy
  var element = arrCopy.splice(currentIndex, 1)[0] // pop the element out
  arrCopy.splice(index, 0, element)                // put the element back at index
  return arrCopy
}
