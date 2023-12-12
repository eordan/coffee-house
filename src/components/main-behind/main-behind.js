import menuItem from '../../elements/menu-item/menu-item.js';
import {
  menuImages,
  menuNames,
  menuDescriptions,
  menuPrices,
} from '../../service/behind-info.js';
import './main-behind.scss';

export default function addBehind() {
  const main = document.querySelector('#main');
  const behind = main.appendChild(document.createElement('section'));
  behind.id = 'behind';
  behind.classList.add('behind');

  const behindContainer = behind.appendChild(document.createElement('div'));
  behindContainer.classList.add('behind-container');

  const title = behindContainer.appendChild(document.createElement('h1'));
  title.innerHTML = `Behind each of our cups<br>hides an <i class="italic-accent">amazing surprise</i>`;
  title.classList.add('behind-title');

  // Create buttons container
  const buttonsContainer = behindContainer.appendChild(
    document.createElement('div'),
  );
  buttonsContainer.classList.add('buttons-container');

  const coffeeButton = buttonsContainer.appendChild(
    document.createElement('button'),
  );
  coffeeButton.classList.add('coffee-button');

  const coffeeButtonInternal = coffeeButton.appendChild(
    document.createElement('div'),
  );
  coffeeButtonInternal.classList.add('coffee-button-internal');

  const coffeeButtonCupContainer = coffeeButtonInternal.appendChild(
    document.createElement('div'),
  );
  coffeeButtonCupContainer.classList.add('coffee-button-cup-container');

  const coffeeButtonCup = coffeeButtonCupContainer.appendChild(
    document.createElement('div'),
  );
  coffeeButtonCup.classList.add('coffee-button-cup');

  const coffeeButtonText = coffeeButtonInternal.appendChild(
    document.createElement('div'),
  );
  coffeeButtonText.innerHTML = 'Coffee';
  coffeeButtonText.classList.add('coffee-button-text');

  const teaButton = buttonsContainer.appendChild(
    document.createElement('button'),
  );
  teaButton.classList.add('tea-button');

  const teaButtonInternal = teaButton.appendChild(
    document.createElement('div'),
  );
  teaButtonInternal.classList.add('tea-button-internal');

  const teaButtonCupContainer = teaButtonInternal.appendChild(
    document.createElement('div'),
  );
  teaButtonCupContainer.classList.add('tea-button-cup-container');

  const teaButtonCup = teaButtonCupContainer.appendChild(
    document.createElement('div'),
  );
  teaButtonCup.classList.add('tea-button-cup');

  const teaButtonText = teaButtonInternal.appendChild(
    document.createElement('div'),
  );
  teaButtonText.innerHTML = 'Tea';
  teaButtonText.classList.add('tea-button-text');

  const desertButton = buttonsContainer.appendChild(
    document.createElement('button'),
  );
  desertButton.classList.add('desert-button');

  const desertButtonInternal = desertButton.appendChild(
    document.createElement('div'),
  );
  desertButtonInternal.classList.add('desert-button-internal');

  const desertButtonCupContainer = desertButtonInternal.appendChild(
    document.createElement('div'),
  );
  desertButtonCupContainer.classList.add('desert-button-cup-container');

  const desertButtonCup = desertButtonCupContainer.appendChild(
    document.createElement('div'),
  );
  desertButtonCup.classList.add('desert-button-cup');

  const desertButtonText = desertButtonInternal.appendChild(
    document.createElement('div'),
  );
  desertButtonText.innerHTML = 'Dessert';
  desertButtonText.classList.add('desert-button-text');

  const coffeeElementContainer = behindContainer.appendChild(
    document.createElement('div'),
  );
  coffeeElementContainer.classList.add('coffee-element-container');

  menuItem(
    coffeeElementContainer,
    menuImages.irishCoffee,
    menuNames.irishCoffee,
    menuDescriptions.irishCoffee,
    menuPrices.irishCoffee,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.kahluaCoffee,
    menuNames.kahluaCoffee,
    menuDescriptions.kahluaCoffee,
    menuPrices.kahluaCoffee,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.honeyRaf,
    menuNames.honeyRaf,
    menuDescriptions.honeyRaf,
    menuPrices.honeyRaf,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.iceCappuccino,
    menuNames.iceCappuccino,
    menuDescriptions.iceCappuccino,
    menuPrices.iceCappuccino,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.espresso,
    menuNames.espresso,
    menuDescriptions.espresso,
    menuPrices.espresso,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.latte,
    menuNames.latte,
    menuDescriptions.latte,
    menuPrices.latte,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.latteMacchiato,
    menuNames.latteMacchiato,
    menuDescriptions.latteMacchiato,
    menuPrices.latteMacchiato,
  );
  menuItem(
    coffeeElementContainer,
    menuImages.coffeeWithCognac,
    menuNames.coffeeWithCognac,
    menuDescriptions.coffeeWithCognac,
    menuPrices.coffeeWithCognac,
  );
}
