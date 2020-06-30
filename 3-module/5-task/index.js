/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  numbers = [];
  let arr = str.split(',').join(' ').split(' ');

  for (let item of arr) {
    if (+item) {
      numbers.push(item);
    }
  }
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  return {'min': min, 'max': max};
}
