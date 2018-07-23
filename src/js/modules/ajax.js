import Axios from 'axios';
import { slideUp, slideDown, hideModal } from './DOM';
import { renderFlash } from './flashes';
import { removeModal } from './modal';

function deleteUser(event) {
  const id = event.target.dataset.id;
  console.log(id)
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

function saveItem(){
  const parent = event.target.parentElement.parentElement;
  const parentId = parent.dataset.id;
  const title = parent.querySelector('input').value;
  const url = "/items";
  const data = {
    list: parentId,
    title: title
  }
  Axios.post(url, data)
    .then(response => console.log(response))
    .catch(console.log(error));
}

export { deleteUser, saveItem }