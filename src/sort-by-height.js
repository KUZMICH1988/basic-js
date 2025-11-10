const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = arr.filter(x => x !== -1).sort((a, b) => a - b);
  const result = [];
  let sortedIndex = 0;
  for (const value of arr) {
    if (value === -1) {
      result.push(-1);
    } else {
      result.push(sorted[sortedIndex]);
      sortedIndex += 1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
