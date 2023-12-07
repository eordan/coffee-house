import './contact-info.scss';

export default function addContactInfo(
  container,
  iconStyle,
  text,
  isClickable,
  eventHandler,
) {
  const infoLine = container.appendChild(document.createElement('div'));
  infoLine.classList.add('footer__info-line');

  const icon = infoLine.appendChild(document.createElement('div'));
  icon.classList.add('footer__info-icon');
  icon.classList.add(iconStyle);

  const infoText = infoLine.appendChild(document.createElement('div'));
  infoText.innerHTML = text;
  infoText.classList.add('footer__info-text');

  if (isClickable) {
    infoText.addEventListener('click', eventHandler);
  }
}
