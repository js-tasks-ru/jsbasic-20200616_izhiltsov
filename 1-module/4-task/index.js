/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  result = false;
  str = str.toLowerCase();
  if (str.includes('1xbet') || str.includes('xxx')) {
    result = true;
  }
  return result;
}
