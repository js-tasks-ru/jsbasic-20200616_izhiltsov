/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let filteredUsers = [];
  for (let user of users) {
    if (user.age <= age) {
      filteredUsers.push(`${user.name}, ${user.balance}`);
    }
  }
  let result = filteredUsers.join('\n');
  return result;
}
