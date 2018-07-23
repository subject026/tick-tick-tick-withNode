import { saveItem, saveList, getLists } from './ajax';
import { renderLists } from './DOM';

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
  // If lists div empty get lists via ajax & render
  if (listContainer.innerHTML == '') {
    console.log("no lists!!")
    const lists = await getLists();
    // console.log(lists);   
    renderLists(lists);
    // const lists = await getLists();
    // console.log(lists);
    // renderLists(lists);
  }
  // Main form to add lists
  newListForm.addEventListener('submit', saveList);
}

const List = {
  init: init 
}

export { List }