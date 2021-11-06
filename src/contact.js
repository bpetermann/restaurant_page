function createContact() {
  const contact = document.createElement('div');

  contact.appendChild(createContactItem('phoneDescription', 'Phone:'));
  contact.appendChild(createContactItem('phone', '555-BENS-BURGERS'));

  contact.appendChild(createContactItem('mailDescription', 'Mail:'));
  contact.appendChild(createContactItem('mail', 'ben@randomletters.com'));

  contact.appendChild(createContactItem('adressDescription', 'Adress:'));
  contact.appendChild(createContactItem('adress', 'Some Adress'));

  contact.setAttribute('id', 'contact');
  return contact;
}

function createContactItem(name, description) {
  const contactItem = document.createElement('h2');
  contactItem.innerHTML = description;
  contactItem.setAttribute('id', name);
  return contactItem;
}

function initialiseContact() {
  document.getElementById('main').appendChild(createContact());
}

export default initialiseContact;
