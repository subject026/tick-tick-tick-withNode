import { getItems, getLists } from './ajax';

//
// Load into local from DB

async function loadLists(){
  // Get from DB
  const lists = await getLists();
  // Load into local storage
  const listObj = lists.reduce((total, list) => {
    total[list._id] = {
      title: list.title,
      owner: list.owner,
      created: list.created
    }
    return total;
  }, {});
  localStorage.setItem("lists", JSON.stringify(listObj));
}

async function loadItems(){
  // Items loaded into local storage 
  const items = await getItems();
  const itemsObj = items.reduce((total, item) => {
    total[item._id] = {
      title: item.title,
      parent: item.parent,
      owner: item.owner
    }
    return total;
  }, {});
  localStorage.setItem("items", JSON.stringify(itemsObj));
}


function getListsLocal(){
  const lists = JSON.parse(localStorage.getItem("lists"));
  return lists;
}

function getItemsLocal(listId){
  const items = JSON.parse(localStorage.getItem("items"));
  const itemsArray = [];
  for (let item in items) {
    if (items[item].parent == listId) {
      const obj = {
        _id: items[item]._id,
        title: items[item].title
      }
      itemsArray.push(obj);
    }
  }
  return itemsArray;
}


export { loadItems, loadLists, getListsLocal, getItemsLocal }