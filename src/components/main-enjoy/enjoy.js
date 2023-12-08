// import addMenuPage from '../../pages/menu/menu.js';
// import { globalState, changeState } from '../../service/state.js';
import './enjoy.scss';

export default function addEnjoy() {
    const main = document.querySelector('#main');
    const enjoy = main.appendChild(document.createElement('section'));
    enjoy.id = 'enjoy';
    enjoy.classList.add('enjoy');

    const enjoyContainer = enjoy.appendChild(document.createElement('div'));
    enjoyContainer.classList.add('enjoy-container');

    const textContainer = enjoyContainer.appendChild(document.createElement('div'));
    textContainer.classList.add('text-container');

    const topParagraph = textContainer.appendChild(document.createElement('h1'));
    topParagraph.innerHTML = `<i class="italic-accent">Enjoy</i> premium coffee at our charming cafe`;
    topParagraph.classList.add('enjoy-top-paragraph');

    const middleParagraph = textContainer.appendChild(document.createElement('div'));
    middleParagraph.innerHTML = 'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.';
    middleParagraph.classList.add('middle-paragraph');

    const buttonContainer = textContainer.appendChild(document.createElement('div'));
    buttonContainer.classList.add('enjoy-button-container');
    // buttonContainer.addEventListener("click", (event) => {
    //     if (globalState.page === 'main') {
    //       event.preventDefault();
    //       const menuNode = document.querySelector('#main');
    //       menuNode.querySelectorAll('*').forEach(n => n.remove());
    //       addMenuPage();
    //       changeState({ page: 'menu' });
    //       history.pushState({}, '', 'menu');
    //     }
    //   });

    const button = buttonContainer.appendChild(document.createElement('div'));
    button.classList.add('enjoy-button');

    const buttonText = button.appendChild(document.createElement('div'));
    buttonText.innerHTML = 'Menu';
    buttonText.classList.add('enjoy-button-text');

    const buttonImg = button.appendChild(document.createElement('img'));
    buttonImg.setAttribute("src", "images/coffee-cup-links.svg");
    buttonImg.setAttribute("alt", "Cup image");
    buttonImg.classList.add('enjoy-button-image');
}
