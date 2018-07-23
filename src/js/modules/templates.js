import { saveItem } from './ajax';

/*

  All functions in this file return a HTML element ready to be appended
  to the DOM by another function somewhere else

  ++ Each one should accept full JSON object i.e:

  {
    _id: "diva786sc7ds6cd76cd9",
    title: "Important item",
    parent: "sdfdsac987c98ds7c9sa"
  }

*/

function buildList(data) {
  const list = document.createElement('div');
  list.classList = "list list--closed";
  list.dataset.id = data._id;
  const title = data.title;
  list.innerHTML = `
    <div class="list__header">
      <h3 class="list__title">${title}</h3>
      <i class="fas fa-cog list__open" rel="js-list-open"></i>
    </div>`;
  return list;
}


function buildListContent(data){
  const el = document.createElement('div');
  el.classList = "list__content"; 
  el.setAttribute('rel', 'js-list-content');
  el.innerHTML = `    
  <div class="list__options">
  <input name="item-title" type="text" rel="js-add-item-input">
  <button class="button" rel="js-add-item">Add Item</button>
  </div>`;
  // build and append list items based on ajax data
  // data from ajax call
  const items = data.data;
  if (items.length > 0) {
    const optionsEl = el.querySelector('.list__options');
    console.log(optionsEl)
    items.forEach(item => {
      el.insertBefore(buildListItem(item), optionsEl);
      console.log(item);
    })  
  }
  return el;
}

function buildListItem(item){
  const title = item.title;
  const el = document.createElement('div');
  el.innerHTML = `
    <span>${title}</span>`;
  return el;
}

export { buildList, buildListContent } 