import TweenLite from 'gsap';
import { buildList, buildListContent } from './templates';
import { getItems, saveItem } from './ajax';

//
// user admin consatina

function slideDown(el){
  TweenLite.to(el, 0.4, {
    css: {
      className: "user-options"
    },
    ease: Power4.easeOut
  });
}

function slideUp(el) {
  TweenLite.to(el, 0.4, {
    css: {
      className: "user-options user-options--hidden"
    },
    ease: Power4.easeOut,
    onComplete: function(){
      el.parentElement.removeChild(el);
    }
  });
}

//
// Modal Stuff

function showModal(el){
  TweenLite.to(el, 0.4, {
    css: {
      className: "modal-container"
    },
    ease: Power4.easeOut
  });
}

function hideModal(){
  const modal = document.querySelector('.modal-container');
  TweenLite.to(modal, 0.4, {
    css: {
      className: "modal-container modal-container--hidden"
    },
    ease: Power4.easeOut,
    onComplete: function(){
      modal.parentElement.removeChild(modal);
    }
  });
}

//
// Render Lists

function renderList(title){
  const listEl = buildList({title: title});
  console.log(listEl);
}

function renderLists(lists) {
  const container = document.querySelector('[rel="js-list-container"]');
  lists.forEach(data => {
    const list = buildList(data);
    list.querySelector('.list__open').addEventListener('click', toggleListOpen);
    container.appendChild(list);
  });
}

async function toggleListOpen(){
  const list = event.target.parentElement.parentElement;
  if (list.classList.contains('list--closed')) {
    // if closed, open it...
    /*
    
      Here we'll switch to getting data from local storage 
    
    */  
    list.classList.toggle('list--closed');
    const id = list.dataset.id;
    const items = await getItems(id);
    list.appendChild(buildListContent(items));   
    const options = list.querySelector('.list__options');
    // bind save item event
    console.log(list)
    list.querySelector('[rel="js-add-item"]').addEventListener('click', saveItem)

  } else {
    list.classList.toggle('list--closed');
    // remove list content element
    closeList(list);
  }
}


function closeList(list){
  const listContent = list.querySelector('[rel="js-list-content"]');
  listContent.parentElement.removeChild(listContent);
}


export { slideUp, slideDown,
          showModal, hideModal,
          renderList, renderLists }