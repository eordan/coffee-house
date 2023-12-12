import './main-resource.scss';

export default function addResource() {
  const main = document.querySelector('#main');
  const resource = main.appendChild(document.createElement('section'));
  resource.id = 'resource';
  resource.classList.add('resource');

  const resourceContainer = resource.appendChild(document.createElement('div'));
  resourceContainer.classList.add('resource-container');

  const title = resourceContainer.appendChild(document.createElement('div'));
  title.innerHTML = `Resource is <i class="italic-accent">the perfect and cozy place</i> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.`;
  title.classList.add('resource-title');

  const images = resourceContainer.appendChild(document.createElement('div'));
  images.classList.add('images');

  const leftImages = images.appendChild(document.createElement('div'));
  leftImages.classList.add('left-images');

  const topLeftImage = leftImages.appendChild(document.createElement('div'));
  topLeftImage.classList.add('top-left-image');

  const bottomLeftImage = leftImages.appendChild(document.createElement('div'));
  bottomLeftImage.classList.add('bottom-left-image');

  const rightImages = images.appendChild(document.createElement('div'));
  rightImages.classList.add('right-images');

  const topRightImage = rightImages.appendChild(document.createElement('div'));
  topRightImage.classList.add('top-right-image');

  const bottomRightImage = rightImages.appendChild(
    document.createElement('div'),
  );
  bottomRightImage.classList.add('bottom-right-image');
}
