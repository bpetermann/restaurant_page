function body() {
  const element = document.createElement('div');
  element.setAttribute('id', 'home');
  element.innerHTML =
    'Hello Customer and welcome to Ben’s Burgers!' +
    '<br />' +
    '<br />' +
    'Are you hungry?' +
    '<br />' +
    '<br />' +
    'Come and visit us to enjoy our tasty Burgers!';
  return element;
}

function initialiseHome() {
  document.getElementById('main').appendChild(body());
}

export default initialiseHome;
