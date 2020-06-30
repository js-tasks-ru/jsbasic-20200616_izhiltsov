/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let result = '';
  let words = str.split('-');
  let first = words.shift();
  for (let word of words) {
    word = word[0].toUpperCase() + word.slice(1);
    result += word;
  }
  return first + result;
}

