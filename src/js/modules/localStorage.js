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
  const items = await getItems();
  console.log(items)
  const itemsArray = items.reduce((total, item) => {
    total[item._id] = {
      title: item.title,
      owner: item.owner,
      parent: item.parent
    }
    return total;
  }, {});
  // localStorage.setItem("items", JSON.stringify(itemsArray));
}


function getListsLocal(){
  const lists = JSON.parse(localStorage.getItem("lists"));
  console.log("lists from local: ", lists);
  return lists;
}

function getItemsLocal(listId){

}


export { loadItems, loadLists, getListsLocal, getItemsLocal }