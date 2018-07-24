import Axios from 'axios';
import { slideUp, slideDown, hideModal } from './DOM';
import { renderFlash } from './flashes';
import { removeModal } from './modal';

function deleteUserDB(event) {
  const id = event.target.dataset.id;
  const parent = document.querySelector(`div[data-id="${id}"]`)
  const url = "/users";
  Axios({ method: 'delete', url: `${url}`, data: { id: id } })
    .then(response => {
      if (response.data.complete) {
        renderFlash("success");
        parent.parentElement.removeChild(parent);
        hideModal();
      } else {
        console.log(response.data.error.message);
      }
    });
}

function saveItemDB(){
  const parent = event.target.parentElement.parentElement.parentElement;
  const parentId = parent.dataset.id;
  const title = parent.querySelector('input').value;
  const url = "/API/items";
  const data = {
    parent: parentId,
    title: title
  }
  Axios.post(url, data)
    .then(response => console.log("saveItem() response: ", response))
    .catch(console.log(error));
}

async function saveListDB(event) {
  const title = event.target.parentElement.querySelector('input').value;
  event.preventDefault();
  const data = {
    title: title
  }
  const res = await Axios.post(this.action, data);
}

async function getListsDB(){
  const response = await Axios.get('/API/lists');  
  return response.data;
}


async function getItemsDB(id){
  const response = await Axios.get(`/API/items`);
  return response.data;
}

export { deleteUserDB, saveItemDB, saveListDB, getListsDB, getItemsDB }