import axios from 'axios';

// Bind events to text box and button

function init(){

  const newListForm = $('[rel="js-add-list-form"]')[0];
  const newTextInput = $('[rel="js-list-save-input"]')[0];
  console.log(newListForm);
  console.log(newTextInput);

  function saveList(event){
    event.preventDefault();
    console.log(newTextInput.value)
    const data = {
      title: newTextInput.value
    }
    axios.post(this.action, data)
      .then(response => {
        console.log(response);    
      }).catch(
        // console.log(console.error)
      );
  }

  newListForm.addEventListener('submit', saveList);
}


const List = {
  init: init 
}

export { List }