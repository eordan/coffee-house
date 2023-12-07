import './footer.scss';
import addContactInfo from '../../elements/contact-info/contact-info.js';
import addSocialButton from '../../elements/social-button/social-button.js';

export default function addContact() {
  const footer = document.querySelector('#footer');
  footer.classList.add('footer');

  const footerContainer = footer.appendChild(document.createElement('div'));
  footerContainer.classList.add('footer-container');

  // Add left container to the footer
  const leftContainer = footerContainer.appendChild(
    document.createElement('div'),
  );
  leftContainer.classList.add('left-container');

  const sipSavourSmile = leftContainer.appendChild(
    document.createElement('div'),
  );
  sipSavourSmile.innerHTML =
    'Sip, Savor, Smile. <i class="italic-accent">It’s coffee time!</i>';
  sipSavourSmile.classList.add('sip-savour-smile');

  const iconsContainer = leftContainer.appendChild(
    document.createElement('div'),
  );
  iconsContainer.classList.add('icons-container');

  addSocialButton(iconsContainer, 'footer__twitter-button');
  addSocialButton(iconsContainer, 'footer__insta-button');
  addSocialButton(iconsContainer, 'footer__facebook-button');

  const rightContainer = footerContainer.appendChild(
    document.createElement('div'),
  );
  rightContainer.classList.add('right-container');

  const contactUsBlock = rightContainer.appendChild(
    document.createElement('div'),
  );
  contactUsBlock.innerHTML = 'Contact us';
  contactUsBlock.classList.add('contact-us-block');

  addContactInfo(
    rightContainer,
    'footer__info-icon_address',
    '8558 Green Rd.,  LA',
    true,
    () => {
      window.open(
        'https://www.google.com/maps/place/40.7128,-74.0060',
        '_blank',
      );
    },
  );

  addContactInfo(
    rightContainer,
    'footer__info-icon_phone',
    '+1 (603) 555-0123',
    true,
    () => {
      window.location.href = 'tel:+16035550123';
    },
  );

  addContactInfo(
    rightContainer,
    'footer__info-icon_schedule',
    'Mon-Sat: 9:00 AM – 23:00 PM',
    false,
  );
}
