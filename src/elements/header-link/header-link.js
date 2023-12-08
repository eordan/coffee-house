import './header-link.scss';
import addMainPage from '../../pages/main/main.js';
import { getState, changeState } from '../../service/state';

export default function addHeaderLink(container, text, section) {
  const button = container.appendChild(document.createElement('a'));
  button.innerHTML = text;
  button.classList.add('header__link');
  button.setAttribute('href', section);
  button.addEventListener('click', event => {
    if (getState() === 'menu') {
      event.preventDefault();
      const menuNode = document.querySelector('#main');
      menuNode.querySelectorAll('*').forEach(n => n.remove());
      addMainPage();
      changeState({ page: 'main' });
      //   menuLink.classList.remove('menu-link-stability');
      //   menuLink.classList.add('menu-link-interactivity');
      //   menuLink.setAttribute("href", "");
      document.querySelector('#choose').scrollIntoView();
    }
  });
}
