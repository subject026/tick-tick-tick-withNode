import { toggleUserOptions } from './modules/adminOptions';
import { toggleMobNav } from './modules/mobNav';
import $ from 'bling';
import { List } from './modules/list';

const buttons = document.querySelectorAll('[rel="js-userOptions"]');
const mobNavButton = document.querySelector('[rel="js-mob-nav-toggle"]');
const lists = $('.lists');

// If on lists home page
if (lists.length > 0) List.init();

// If on User Admin page
if (buttons.length > 0) {
  buttons.forEach(button => {
    button.addEventListener('click', toggleUserOptions)
  });
} 

// Don't need this on the login/register pages
if (mobNavButton) {
  mobNavButton.addEventListener('click', toggleMobNav);
}