import { saveItem, saveList } from './ajax';
import { renderLists } from './DOM';
import { loadItems, loadLists, getListsLocal } from './localStorage';

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
  // 1. load lists into local storage
  loadLists();
  // 2. get lists out of local storage and render to page
  renderLists(getListsLocal())
  // 3. load items into local storage
  loadItems();
  // add list form event
  newListForm.addEventListener('submit', saveList);
}

const List = {
  init: init 
}

export { List }