const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */) {
  // if (!Array.isArray(arr)) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // } else if (arr.length === 0) {
  //   return [];
  // }
  // const result = [];
  // const length = arr.length;
  // for (let i = 0; i < length; i += 1) {
  //   const currentElement = arr[i];
  //   if (currentElement === '--double-next') {
  //     if (i + 1 < length) {
  //       result.push(arr[i + 1]);
  //     }
  //   } else if (currentElement === '--double-prev') {
  //     if (i - 1 >= 0 && result.length > 0) {
  //       result.push(result[result.length - 1]);
  //     }
  //   } else if (currentElement === '--discard-next') {
  //     if (i + 1 < length) {
  //       i += 1;
  //     }
  //   } else if (currentElement === '--discard-prev') {
  //     if (result.length > 0) {
  //       result.pop();
  //     }
  //   } else {
  //     result.push(currentElement);
  //   }
  // }
  // return result;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  transform
};
