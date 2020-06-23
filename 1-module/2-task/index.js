
function print(text) {
  console.log(text);
}


function isValid(name) {
  if (name.length >= 4 && !(name.includes(' '))) {
    return true;
  } 
  return false;
}

function sayHello() {
  let userName = prompt('Enter your name:');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Name Error');
  }
}
