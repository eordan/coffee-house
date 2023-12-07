import './header.scss';
// import addMainPage from '../../pages/main/main.js';
// import addMenuPage from '../../pages/menu/menu.js';
// import { globalState, changeState } from '../../service/state.js';

export default function addMenu() {
  // let state = 'main';

  const menu = document.querySelector('#header');
  menu.classList.add('header');

  const menuContainer = menu.appendChild(document.createElement('div'));
  menuContainer.classList.add('menu-container');

  // Create logo container
  const logoContainer = menuContainer.appendChild(document.createElement('a'));
  logoContainer.classList.add('logo');
  logoContainer.setAttribute('href', '');
  // logoContainer.addEventListener('click', (event) => {
  //   if (globalState.page === 'menu') {
  //     event.preventDefault();
  //     const menuNode = document.querySelector('#main');
  //     menuNode.querySelectorAll('*').forEach(n => n.remove());
  //     addMainPage();
  //     changeState({ page: 'main' });
  //     history.back();
  //     menuLink.classList.remove('menu-link-stability');
  //     menuLink.classList.add('menu-link-interactivity');
  //     menuLink.setAttribute("href", "");
  //   }
  // });

  // Create navigation container
  const navContainer = menuContainer.appendChild(document.createElement('div'));
  navContainer.classList.add('nav-container');

  const nav = navContainer.appendChild(document.createElement('nav'));
  nav.classList.add('nav');

  const favoriteCoffeeButton = nav.appendChild(document.createElement('a'));
  favoriteCoffeeButton.innerHTML = 'Favorite Coffee';
  favoriteCoffeeButton.classList.add('button');
  favoriteCoffeeButton.classList.add('favorite-coffee-button');
  favoriteCoffeeButton.setAttribute('href', '#choose');
  // favoriteCoffeeButton.addEventListener('click', (event) => {
  //   if (globalState.page === 'menu') {
  //     event.preventDefault();
  //     const menuNode = document.querySelector('#main');
  //     menuNode.querySelectorAll('*').forEach(n => n.remove());
  //     addMainPage();
  //     changeState({ page: 'main' });
  //     history.back();
  //     menuLink.classList.remove('menu-link-stability');
  //     menuLink.classList.add('menu-link-interactivity');
  //     menuLink.setAttribute("href", "");
  //     document.querySelector('#choose').scrollIntoView();
  //   }
  // });

  const aboutButton = nav.appendChild(document.createElement('a'));
  aboutButton.innerHTML = 'About';
  aboutButton.classList.add('button');
  aboutButton.classList.add('about-button');
  aboutButton.setAttribute('href', '#resource');
  // aboutButton.addEventListener('click', (event) => {
  //   if (globalState.page === 'menu') {
  //     event.preventDefault();
  //     const menuNode = document.querySelector('#main');
  //     menuNode.querySelectorAll('*').forEach(n => n.remove());
  //     addMainPage();
  //     changeState({ page: 'main' });
  //     history.back();
  //     menuLink.classList.remove('menu-link-stability');
  //     menuLink.classList.add('menu-link-interactivity');
  //     menuLink.setAttribute("href", "");
  //     document.querySelector('#resource').scrollIntoView();
  //   }
  // });

  const mobileAppButton = nav.appendChild(document.createElement('a'));
  mobileAppButton.innerHTML = 'Mobile App';
  mobileAppButton.classList.add('button');
  mobileAppButton.classList.add('mobile-app-button');
  mobileAppButton.setAttribute('href', '#download');
  // mobileAppButton.addEventListener('click', (event) => {
  //   if (globalState.page === 'menu') {
  //     event.preventDefault();
  //     const menuNode = document.querySelector('#main');
  //     menuNode.querySelectorAll('*').forEach(n => n.remove());
  //     addMainPage();
  //     changeState({ page: 'main' });
  //     history.back();
  //     menuLink.classList.remove('menu-link-stability');
  //     menuLink.classList.add('menu-link-interactivity');
  //     menuLink.setAttribute("href", "");
  //     document.querySelector('#download').scrollIntoView();
  //   }
  // });

  const contactUsButton = nav.appendChild(document.createElement('a'));
  contactUsButton.innerHTML = 'Contact Us';
  contactUsButton.classList.add('button');
  contactUsButton.classList.add('contact-us-button');
  // contactUsButton.addEventListener('click', (event) => {
  //   if (globalState.page === 'menu') {
  //     event.preventDefault();
  //     document.querySelector('#footer').scrollIntoView();
  //   } else if (globalState.page === 'main') {
  //     event.preventDefault();
  //     document.querySelector('#footer').scrollIntoView();
  //   }
  // });

  // Create non-interactive button container
  const menuButtonContainer = menuContainer.appendChild(
    document.createElement('div'),
  );
  menuButtonContainer.classList.add('menu-button');

  const menuLink = menuButtonContainer.appendChild(document.createElement('a'));
  menuLink.innerHTML = 'Menu';
  menuLink.classList.add('menu-link');
  menuLink.classList.add('menu-link-interactivity');
  menuLink.setAttribute('href', '');
  // menuLink.addEventListener("click", (event) => {
  //   if (globalState.page === 'main') {
  //     event.preventDefault();
  //     const menuNode = document.querySelector('#main');
  //     menuNode.querySelectorAll('*').forEach(n => n.remove());
  //     addMenuPage();
  //     changeState({ page: 'menu' });
  //     history.pushState({}, '', 'menu');
  //     menuLink.classList.remove('menu-link-interactivity');
  //     menuLink.classList.add('menu-link-stability');
  //     menuLink.removeAttribute("href");
  //   }
  // });

  const menuButtonCup = menuContainer.appendChild(
    document.createElement('div'),
  );
  menuButtonCup.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  menuButtonCup.classList.add('menu-button-cup');
}
