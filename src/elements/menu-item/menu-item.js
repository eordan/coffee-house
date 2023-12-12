import './menu-item.scss';

export default function menuItem(
  container,
  imageLink,
  name,
  description,
  price,
) {
  const elementContainer = container.appendChild(document.createElement('div'));
  elementContainer.classList.add('menu-item-container');

  const imageContainer = elementContainer.appendChild(
    document.createElement('div'),
  );
  imageContainer.classList.add('menu-item-image-container');
  imageContainer.style.background = `url(${imageLink}) 50% / cover no-repeat`;

  const textContainer = elementContainer.appendChild(
    document.createElement('div'),
  );
  textContainer.classList.add('menu-item-text-container');

  const nameField = textContainer.appendChild(document.createElement('div'));
  nameField.innerHTML = `${name}`;
  nameField.classList.add('menu-item-name');

  const descriptionField = textContainer.appendChild(
    document.createElement('div'),
  );
  descriptionField.innerHTML = `${description}`;
  descriptionField.classList.add('menu-item-description');

  const priceField = textContainer.appendChild(document.createElement('div'));
  priceField.innerHTML = `${price}`;
  priceField.classList.add('menu-item-price');
}
