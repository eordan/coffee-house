import './main-download.scss';

export default function addDownload() {
  const main = document.querySelector('#main');
  const download = main.appendChild(document.createElement('section'));
  download.id = 'download';
  download.classList.add('download');

  const downloadContainer = download.appendChild(document.createElement('div'));
  downloadContainer.classList.add('download-container');

  const textContainer = downloadContainer.appendChild(
    document.createElement('div'),
  );
  textContainer.classList.add('download-text-container');

  const topParagraph = textContainer.appendChild(document.createElement('div'));
  topParagraph.innerHTML = `<i class="italic-accent">Download</i> our apps<br>to start ordering`;
  topParagraph.classList.add('download-top-paragraph');

  const middleParagraph = textContainer.appendChild(
    document.createElement('div'),
  );
  middleParagraph.innerHTML = `Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are`;
  middleParagraph.classList.add('download-middle-paragraph');

  const buttons = textContainer.appendChild(document.createElement('div'));
  buttons.classList.add('apple-google-buttons');

  const appleButtonContainer = buttons.appendChild(
    document.createElement('button'),
  );
  appleButtonContainer.classList.add('apple-button-container');

  const appleButton = appleButtonContainer.appendChild(
    document.createElement('div'),
  );
  appleButton.classList.add('apple-button');

  const appleButtonIcon = appleButton.appendChild(
    document.createElement('div'),
  );
  appleButtonIcon.classList.add('apple-button-icon');

  const appleButtonText = appleButton.appendChild(
    document.createElement('div'),
  );
  appleButtonText.classList.add('apple-button-text');

  const appleButtonTopText = appleButtonText.appendChild(
    document.createElement('div'),
  );
  appleButtonTopText.innerHTML = 'Available on the';
  appleButtonTopText.classList.add('apple-button-top-text');

  const appleButtonBottomText = appleButtonText.appendChild(
    document.createElement('div'),
  );
  appleButtonBottomText.innerHTML = 'App Store';
  appleButtonBottomText.classList.add('apple-button-bottom-text');

  const googleButtonContainer = buttons.appendChild(
    document.createElement('button'),
  );
  googleButtonContainer.classList.add('google-button-container');

  const googleButton = googleButtonContainer.appendChild(
    document.createElement('div'),
  );
  googleButton.classList.add('google-button');

  const googleButtonIcon = googleButton.appendChild(
    document.createElement('div'),
  );
  googleButtonIcon.classList.add('google-button-icon');

  const googleButtonText = googleButton.appendChild(
    document.createElement('div'),
  );
  googleButtonText.classList.add('google-button-text');

  const googleButtonTopText = googleButtonText.appendChild(
    document.createElement('div'),
  );
  googleButtonTopText.innerHTML = 'Available on';
  googleButtonTopText.classList.add('google-button-top-text');

  const googleButtonBottomText = googleButtonText.appendChild(
    document.createElement('div'),
  );
  googleButtonBottomText.innerHTML = 'Google Play';
  googleButtonBottomText.classList.add('google-button-bottom-text');

  const imageContainer = downloadContainer.appendChild(
    document.createElement('div'),
  );
  imageContainer.classList.add('image-container');
}
