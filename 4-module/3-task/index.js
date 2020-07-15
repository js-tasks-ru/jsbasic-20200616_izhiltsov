/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  let rows = table.tBodies[0].rows;
  for (let tr of rows) {
    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    } else if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    } else {
      tr.setAttribute('hidden', 'true');
    }
    if (tr.cells[2].innerHTML === 'm') {
      tr.classList.add('male');
    } else if (tr.cells[2].innerHTML === 'f') {
      tr.classList.add('female');
    }
    if (tr.cells[1].innerHTML < 18) {
      tr.setAttribute('style', 'text-decoration: line-through');
    }
  }

}
