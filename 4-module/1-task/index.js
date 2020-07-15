/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const element = document.createElement('ul');
  const names = friends.map(item => {
    return `<li>${item.firstName} ${item.lastName}</li>`;
  });
  element.innerHTML = names.join('');
  return element;
}
