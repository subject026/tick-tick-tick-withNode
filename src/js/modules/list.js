import { saveListDB, saveItemDB } from './ajax';
import { saveListLocal, saveItemLocal } from './localStorage';
import { renderLists } from './DOM';
import { loadItems, loadLists, getListsLocal, getUserLocal } from './localStorage';

const newListForm = $('[rel="js-add-list-form"]')[0];
const newTextInput = $('[rel="js-list-save-input"]')[0];
const listContainer = $('.lists__container')[0];


// When form is submitted to add a new list we can't use DB id so generate a temporary one...

function saveList(event){
  event.preventDefault();
  // console.log("saveList THIS: ", this)   this here is the form DOM element
  const input = this.querySelector('[rel="js-list-save-input"]');
  const tempId = "temp-" + Math.floor(Math.random(0, 1) * 10000000000);
  const data = {
    _id: tempId,
    title: input.value,
    owner: getUserLocal()
  }
  // Save to local
  saveListLocal(data)
  // Save to DB
  // Render list to DOM
}


function init(){
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