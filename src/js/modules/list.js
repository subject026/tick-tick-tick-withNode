import axios from 'axios';
import saveItem from './item';

const newListForm = $('[rel="js-add-list-form"]')[0];
const newTextInput = $('[rel="js-list-save-input"]')[0];
const listContainer = $('.lists__container')[0];

// function saveItem(){
//   console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
// }

// All lists rendered by template have buttons to add items
const listButtons = $('[rel="js-new-list-save"]');
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
  newListForm.addEventListener('submit', saveList);
}


const List = {
  init: init 
}

export { List }