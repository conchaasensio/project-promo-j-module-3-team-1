const borderPV = query('.js-border');
const namePV = query('.js-name');
const iconPV = query('.js-icon');
const framePV = query('.js-frame');
const photoPV = query('.js-photo');

const coldSelector = query('.cold');
const warmSelector = query('.warm');
const mediumSelector = query('.medium');

const paletteCold = query('#cold');
const paletteWarm = query('#warm');
const paletteMedium = query('#medium');

//COLD PALETTE

function changeToCold() {
  //BORDER
  borderPV.classList.add('border-cold');
  borderPV.classList.remove('border-warm', 'border-medium');

  //NAME
  namePV.classList.add('name-cold');
  namePV.classList.remove('name-warm', 'name-medium');

  //ICON
  iconPV.classList.add('icon-cold');
  iconPV.classList.remove('icon-warm', 'icon-medium');

  //FRAME
  framePV.classList.add('js-frame-cold');
  framePV.classList.remove('js-frame-warm', 'js-frame-medium');

  //PHOTO
  photoPV.classList.add('photo-cold');
  photoPV.classList.remove('photo-warm', 'photo-medium', 'js-photo-default');

  formData.palette = '1';
  localStorage.setItem('color', JSON.stringify(formData.palette));
}

coldSelector.addEventListener('change', changeToCold);

//WARM PALETTE

function changeToWarm() {
  //BORDER
  borderPV.classList.add('border-warm');
  borderPV.classList.remove('border-cold', 'border-medium');

  //NAME
  namePV.classList.add('name-warm');
  namePV.classList.remove('name-cold', 'name-medium');

  //ICON
  iconPV.classList.add('icon-warm');
  iconPV.classList.remove('icon-cold', 'icon-medium');

  //FRAME
  framePV.classList.add('js-frame-warm');
  framePV.classList.remove('js-frame-cold', 'js-frame-medium');

  //PHOTO
  photoPV.classList.add('photo-warm');
  photoPV.classList.remove('photo-cold', 'photo-medium', 'js-photo-default');

  formData.palette = '2';

  // console.log(formData);
  localStorage.setItem('color', JSON.stringify(formData.palette));
}

warmSelector.addEventListener('change', changeToWarm);

//MEDIUM PALETTE

function changeToMedium() {
  //BORDER
  borderPV.classList.add('border-medium');
  borderPV.classList.remove('border-cold', 'border-warm');

  //NAME
  namePV.classList.add('name-medium');
  namePV.classList.remove('name-cold', 'name-warm');

  //ICON
  iconPV.classList.add('icon-medium');
  iconPV.classList.remove('icon-cold', 'icon-warm');

  //FRAME
  framePV.classList.add('js-frame-medium');
  framePV.classList.remove('js-frame-cold', 'js-frame-warm');

  //PHOTO
  photoPV.classList.add('photo-medium');
  photoPV.classList.remove('photo-cold', 'photo-warm', 'js-photo-default');

  formData.palette = '3';
  localStorage.setItem('color', JSON.stringify(formData.palette));
}

mediumSelector.addEventListener('change', changeToMedium);

const frameSwitcher = query('.js-frame-button');

const frameHidden = query('.js-frame-hidden');

function switchFrame() {
  frameHidden.classList.toggle('js-frame-hidden');
  frameSwitcher.classList.toggle('js-frame-button-off');
  frameSwitcher.classList.toggle('js-frame-button-active');
  //asigna la clase para local storage
  if (frameSwitcher.classList.contains('js-frame-button-active')) {
    localStorage.setItem('frame', 'active');
  }
  if (frameSwitcher.classList.contains('js-frame-button-off')) {
    localStorage.removeItem('frame');
  }
}

function resetFrame() {
  frameHidden.classList.add('js-frame-hidden');
  frameSwitcher.classList.add('js-frame-button-off');
  frameSwitcher.classList.remove('js-frame-button-active');
}

frameSwitcher.addEventListener('click', switchFrame);
