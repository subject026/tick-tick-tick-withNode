import { showModal, hideModal } from './DOM';
import { deleteUser } from './ajax';

function renderModal(event){
  const id = event.target.dataset.id;
  const modalContainer = document.createElement('div');
  modalContainer.classList = 'modal-container modal-container--hidden';
  modalContainer.innerHTML = `
    <section class="modal">
      <h3>Are you sure??</h3>
      <button class="button delete-user--sure" rel="js-modal-delete" data-id="${id}" value="Delete user">Delete Userrrr</button>
      <button class="button" rel="js-modal-close">Close</button>
    </section>`;
    document.querySelector('body').appendChild(modalContainer);
    showModal(modalContainer);
    modalContainer.querySelector('[rel="js-modal-delete"]').addEventListener('click', deleteUser);
    modalContainer.querySelector('[rel="js-modal-close"]').addEventListener('click', removeModal);
}

function removeModal(){
  const modalContainer = document.querySelector('.modal-container');
  hideModal(modalContainer);
}

export { renderModal }