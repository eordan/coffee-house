import './contact.scss';
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

  // const sheduleBlock = rightContainer.appendChild(
  //   document.createElement('div'),
  // );
  // sheduleBlock.classList.add('shedule-block');

  // const sheduleBlockIcon = sheduleBlock.appendChild(
  //   document.createElement('div'),
  // );
  // sheduleBlockIcon.innerHTML = `
  //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  //       <g clip-path="url(#clip0_217_1736)">
  //       <path d="M10 5L10 10L15 10" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //       <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  //       </g>
  //       <defs>
  //       <clipPath id="clip0_217_1736">
  //       <rect width="20" height="20" fill="white"/>
  //       </clipPath>
  //       </defs>
  //   </svg>
  //   `;
  // sheduleBlockIcon.classList.add('shedule-block-icon');

  // const sheculeBlockText = sheduleBlock.appendChild(
  //   document.createElement('div'),
  // );
  // sheculeBlockText.innerHTML = 'Mon-Sat: 9:00 AM – 23:00 PM';
  // sheculeBlockText.classList.add('shedule-block-text');
}
