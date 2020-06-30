/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let result = [];
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (item of arr) {
    if (item >= min && item <= max) {
      result.push(item);
    }
  }
  return result;

}
