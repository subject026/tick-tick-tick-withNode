import TweenLite from 'gsap';
import { buildList } from './templates';

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
    container.appendChild(list);
  });
}


export { slideUp, slideDown,
          showModal, hideModal,
          renderList, renderLists }