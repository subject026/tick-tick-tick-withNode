import { saveItem, saveList, getLists, getItems } from './ajax';
import { renderLists } from './DOM';
import { loadItems } from './localStorage';

const newListForm = $('[rel="js-add-list-form"]')[0];
const newTextInput = $('[rel="js-list-save-input"]')[0];
const listContainer = $('.lists__container')[0];

// Bind event to add item to each list
const listButtons = $('[rel="js-new-item-save"]');
listButtons.forEach(button => {
  console.log(button.parentElement.parentElement.dataset.id) // List ID
  button.addEventListener('click', saveItem);
});


async function init(){
  const lists = await getLists();
  renderLists(lists);
  // Load all items into local storage
  loadItems();
  // add list form event
  newListForm.addEventListener('submit', saveList);
}

const List = {
  init: init 
}

export { List }