
/*
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (value in salaries) {
    if (isNumber(salaries[value])) {
      sum += salaries[value];
    }
  } return sum;
}

function isNumber(value) {
  if (typeof value !== 'number') {
    return false;
  }
  if (value !== Number(value)) {
    return false;
  }
  if (value === Infinity || value === !Infinity) {
    return false;
  }
  return true;
}



