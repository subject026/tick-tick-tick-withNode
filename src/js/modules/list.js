import axios from 'axios';
import { saveItem } from './ajax';

const newListForm = $('[rel="js-add-list-form"]')[0];
const newTextInput = $('[rel="js-list-save-input"]')[0];
const listContainer = $('.lists__container')[0];

// Bind event to add item to each list
const listButtons = $('[rel="js-new-item-save"]');
listButtons.forEach(button => {
  console.log(button.parentElement.parentElement.dataset.id) // List ID
  button.addEventListener('click', saveItem);
});

function renderList(title){
  const list = document.createElement('div');
  list.classList = "list";
  list.innerHTML = `
    <div>>h1>List Title: ${title}</h1></div>`;
  listContainer.appendChild(list);
  }

function saveList(event){
  event.preventDefault();
  const data = {
    title: newTextInput.value
  }
  axios.post(this.action, data)
    .then(response => {
      renderList(newTextInput.value);
    }).catch(
      console.log(console.error)
    );
}


function init(){
  // Main form to add lists
  newListForm.addEventListener('submit', saveList);
  // Buttons to add items to each individual list already on page
  document.querySelectorAll('[rel="js-new-item-save"]').forEach(button => {
    button.addEventListener('click', saveItem);
  });
}

const List = {
  init: init 
}

export { List }