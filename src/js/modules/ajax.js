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



export { deleteUser }