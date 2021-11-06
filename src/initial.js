import initialiseHome from './home.js';
import initialiseMenu from './menu.js';
import initialiseContact from './contact.js';
import Logo from './logo.png';
import cashOnlyImg from './cashOnlyImg.png';

function header() {
  const element = document.createElement('div');
  const logo = new Image();
  logo.src = Logo;
  logo.classList.add('logo');
  element.appendChild(logo);

  element.setAttribute('id', 'header');

  return element;
}

function nav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('btn-nav');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', function () {
    const main = document.getElementById('main');
    if (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    initialiseHome();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('btn-nav');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', function () {
    const main = document.getElementById('main');
    if (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    initialiseMenu();
  });

  const contactButton = document.createElement('button');
  contactButton.classList.add('btn-nav');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', function () {
    if (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    initialiseContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function footer() {
  const element = document.createElement('div');

  element.classList.add('footer');

  const footerImg = new Image();
  footerImg.src = cashOnlyImg;
  footerImg.classList.add('footerImg');
  element.appendChild(footerImg);

  return element;
}

function initialise() {
  document.getElementById('content').appendChild(header());
  document.getElementById('content').appendChild(nav());
  document.getElementById('content').appendChild(createMain());
  document.getElementById('content').appendChild(footer());
}

export default initialise;
