import './social-button.scss';

export default function addSocialButton(container, networkClass) {
  const iconContainer = container.appendChild(document.createElement('button'));
  iconContainer.classList.add('footer__social-button');
  iconContainer.classList.add(networkClass);
}
