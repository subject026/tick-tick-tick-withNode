import TweenLite from 'gsap';

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


export { slideUp, slideDown, showModal, hideModal }