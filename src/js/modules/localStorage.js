import { getItems } from './ajax';

async function loadItems(){
  const items = await getItems();
  
}

export { loadItems }