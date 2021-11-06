import menu from './menu.png';

function createMenu() {
  const menue = document.createElement('div');

  const menuImg = new Image();
  menuImg.src = menu;
  menuImg.classList.add('ourMenu');
  menue.appendChild(menuImg);

  menue.appendChild(createMenuItem('burger', 'Regular'));
  menue.appendChild(createMenuItem('burgerPrice', '5.00$'));

  menue.appendChild(createMenuItem('fries', 'French Fries'));
  menue.appendChild(createMenuItem('friesPrice', '2.00$'));

  menue.appendChild(createMenuItem('cheese', 'Cheese'));
  menue.appendChild(createMenuItem('cheesePrice', 'Add 50'));

  menue.appendChild(createMenuItem('salad', 'Side Salad'));
  menue.appendChild(createMenuItem('saladPrice', '2.00$'));

  menue.appendChild(createMenuItem('drink', 'Soft Drink'));
  menue.appendChild(createMenuItem('drinkPrice', '2.00$'));

  menue.setAttribute('id', 'menue');

  return menue;
}

function createMenuItem(name, description) {
  const menueItem = document.createElement('h2');
  menueItem.innerHTML = description;
  menueItem.setAttribute('id', name);
  return menueItem;
}

function initialiseMenu() {
  document.getElementById('main').appendChild(createMenu());
}

export default initialiseMenu;
