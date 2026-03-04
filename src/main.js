import iconHamburgerUrl from '../assets/icon-hamburger.svg';
import iconCloseUrl from '../assets/icon-close.svg';

const btnHamburger = document.querySelector('.toggle-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const icon = btnHamburger.querySelector('img');

btnHamburger.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) { // Close Menu
    mobileMenu.classList.remove('open');
    body.classList.remove('noscroll');
    icon.src = iconHamburgerUrl;
  } else { // Open Menu
    mobileMenu.classList.add('open');
    body.classList.add('noscroll');
    icon.src = iconCloseUrl;
  }
});
