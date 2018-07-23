import { saveItem } from './ajax';

function buildList(data) {
  console.log(data)
  const list = document.createElement('div');
  list.classList = "list";
  const title = data.title;
  list.innerHTML = `
    <div class="list__title">
      <span>${title}</span>
      <i class="fas fa-cog.list__open" rel="js-"></i>
    </div>
    <div class="list__content">
    
    </div>
    <div class="list__options">
      <input class="list__options__input" type="text" rel="js-item-list-input">
      <button class="button value="Add Item" list__options__save" rel="js-new-item-save">
    </div>`;
  // bind events:
  list.querySelector('[rel="js-new-item-save"]').addEventListener('click', saveItem);
  return list;
}

export { buildList } 