const sideBar = document.querySelector('.sidebar');

function toggleMobNav(){
  sideBar.classList.toggle('sidebar--show');    
}

export { toggleMobNav }