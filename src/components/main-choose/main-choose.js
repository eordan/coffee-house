import './main-choose.scss';

export default function addChoose() {
  const main = document.querySelector('#main');
  const choose = main.appendChild(document.createElement('section'));
  choose.id = 'choose';
  choose.classList.add('choose');

  const chooseContainer = choose.appendChild(document.createElement('div'));
  chooseContainer.classList.add('choose-container');

  const topParagraph = chooseContainer.appendChild(
    document.createElement('div'),
  );
  topParagraph.innerHTML = `Choose your <i class="italic-accent" style="">favorite</i> coffee`;
  topParagraph.classList.add('top-paragraph');

  // Create silder contents
  const sliderContents = chooseContainer.appendChild(
    document.createElement('div'),
  );
  sliderContents.classList.add('slider-contents');

  // Create left button
  const leftButton = sliderContents.appendChild(
    document.createElement('button'),
  );
  // leftButton.innerHTML = `
  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //     <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
  // </svg>
  // `
  leftButton.classList.add('left-slider-button');
  leftButton.classList.add('slider-button');

  // Create slider item container
  const itemContainer = sliderContents.appendChild(
    document.createElement('div'),
  );
  itemContainer.classList.add('item-container');

  const itemThinContainer = itemContainer.appendChild(
    document.createElement('div'),
  );
  itemThinContainer.classList.add('item-thin-container');

  const coffeePicture = itemThinContainer.appendChild(
    document.createElement('div'),
  );
  coffeePicture.classList.add('slider-image');

  const coffeeName = itemThinContainer.appendChild(
    document.createElement('div'),
  );
  coffeeName.innerHTML = 'S’mores Frappuccino';
  coffeeName.classList.add('coffee-name');

  const coffeeDescription = itemThinContainer.appendChild(
    document.createElement('div'),
  );
  coffeeDescription.innerHTML =
    'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.';
  coffeeDescription.classList.add('coffee-description');

  const coffeePrice = itemThinContainer.appendChild(
    document.createElement('div'),
  );
  coffeePrice.innerHTML = '$5.50';
  coffeePrice.classList.add('coffee-price');

  // Create right button
  const rightButton = sliderContents.appendChild(
    document.createElement('button'),
  );
  // rightButton.innerHTML = `
  // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  //     <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
  // </svg>
  // `
  rightButton.classList.add('right-slider-button');
  rightButton.classList.add('slider-button');

  // Create slider position
  const sliderPositionContainer = chooseContainer.appendChild(
    document.createElement('div'),
  );
  sliderPositionContainer.classList.add('slider-position-container');

  const sliderPosition = sliderPositionContainer.appendChild(
    document.createElement('div'),
  );
  sliderPosition.classList.add('slider-position');

  const firstSliderPosition = sliderPosition.appendChild(
    document.createElement('div'),
  );
  firstSliderPosition.classList.add('first-slider-position');

  const secondSliderPosition = sliderPosition.appendChild(
    document.createElement('div'),
  );
  secondSliderPosition.classList.add('second-slider-position');

  const thirdSliderPosition = sliderPosition.appendChild(
    document.createElement('div'),
  );
  thirdSliderPosition.classList.add('third-slider-position');
}
