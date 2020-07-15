/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  rows = Array.from(table.rows);
  rows.forEach((row, i) => {
    row.cells[i].style.backgroundColor = 'red';
  });
}
