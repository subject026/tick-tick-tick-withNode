import { slideUp, slideDown } from './DOM';
import { renderModal } from './modal';


function createOptionsElement(event) {
  const userId = event.target.parentElement.parentElement.dataset.id;
  const optionsDiv = document.createElement('div');
  optionsDiv.classList = "user-options user-options--hidden";
  optionsDiv.setAttribute('rel', "js-openOptions"); 
  optionsDiv.innerHTML = `<p><button class="button delete-user" data-id="${userId}">Delete User!</button></p>`;
  const deleteButton = optionsDiv.querySelector('.delete-user');
  deleteButton.addEventListener('click', renderModal);
  return optionsDiv;
}


function toggleUserOptions(event) {
  const container = event.target.parentElement.parentElement;
  const title = container.querySelector('[rel="js-userTitle"]'); 
  const existingElement = document.querySelector('[rel="js-openOptions"]');
  if (existingElement) {
    const existingTitle = existingElement.parentElement.querySelector('[rel="js-userTitle"]');
    if (container == existingElement.parentElement) {
      existingTitle.classList.toggle('user-title--open');
      existingTitle.classList.toggle('user__title--hover');
      slideUp(existingElement);
      return; 
    } else {
      existingTitle.classList.toggle('user-title--open');
      existingTitle.classList.toggle('user__title--hover');
      slideUp(existingElement);
    }
  }
  const optionsElement = createOptionsElement(event);
  container.appendChild(optionsElement);
  slideDown(optionsElement);
  title.classList.toggle('user-title--open');
  title.classList.toggle('user__title--hover');
}

export { toggleUserOptions }