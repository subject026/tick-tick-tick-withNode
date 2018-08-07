import { getItemsDB, getListsDB } from './ajax';

//
// Load into local from DB

async function loadLists(){
  // Get from DB
  const data = await getListsDB();
  console.log(data.lists)
  // Load into local storage
  const listObj = data.lists.reduce((total, list) => {
    total[list._id] = {
      title: list.title,
      owner: list.owner,
      created: list.created
    }
    return total;
  }, {});
  localStorage.setItem("lists", JSON.stringify(listObj));
  localStorage.setItem("user", JSON.stringify(data.user));
}

async function loadItems(){
  // Items loaded into local storage 
  const items = await getItemsDB();
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

function saveListLocal(data){
  console.log(data)
}

function saveItemLocal(data){
  console.log(data)
}

function getUserLocal(){
  return JSON.parse(localStorage.getItem("user"));
}


export { loadItems, loadLists,getListsLocal, getItemsLocal, saveListLocal, saveItemLocal, getUserLocal }