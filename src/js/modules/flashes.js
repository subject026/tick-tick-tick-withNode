import TweenLite from 'gsap';

const box = document.querySelector('[rel="js-flashBox"]');

function removeFlash(){
  box.querySelector('div').classList.toggle('flash--hidden');
}

function renderFlash(type) {
  document.querySelector('[rel="js-flashBox"]').innerHTML = `
  <div class="flash-content flash__${type} flash--hidden">
  <span class="flash__text">BOOOOM</span>
  </div>`;
  box.querySelector('.flash--hidden').classList.toggle('flash--hidden');
  setTimeout(removeFlash, 1500);
}

export { renderFlash }