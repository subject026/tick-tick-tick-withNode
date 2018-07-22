import { toggleUserOptions } from './modules/adminOptions';
import { toggleMobNav } from './modules/mobNav';

const buttons = document.querySelectorAll('[rel="js-userOptions"]');
const mobNavButton = document.querySelector('[rel="js-mob-nav-toggle"]');

if (buttons.length > 0) {
  buttons.forEach(button => {
    button.addEventListener('click', toggleUserOptions)
  });
} 


if (mobNavButton) {
  // Don't need this on the login/register pages
  mobNavButton.addEventListener('click', toggleMobNav);
}