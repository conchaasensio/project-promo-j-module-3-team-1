/* eslint-disable strict */
let isValid = false;

// const allInputs = formInputs.concat(paletteInputs);

const submitButton = query('form .js-button-share');

const formInputs = document.querySelectorAll('.js-form .form__fill input');

const textError = query('.form__share__text--error');

const paletteInputs = document.querySelectorAll('.js-palette');

let twitterURL;

// const paletteCold = query('#cold');
// const paletteWarm = query('#warm');
// const paletteMedium = query('#medium');

formInputs.forEach((element) => {
  element.addEventListener('change', changeElement);
});

paletteInputs.forEach((element) => {
  element.addEventListener('change', changeElement);
});

function changeElement(event) {
  if (submitButton.hasAttribute('disabled')) {
    resetTwitter();
  }
  validatePalette();
  getValuesFromForm();
  validateForm();

  if (isValid === true) {
    submitButton.removeAttribute('disabled');
    textError.classList.add('js-hidden');
  } else {
    submitButton.setAttribute('disabled', '');
    textError.classList.remove('js-hidden');
  }
}

function getValuesFromForm() {
  formInputs.forEach((input) => {
    if (input.type !== 'file') {
      formData[input.name] = input.value;
    }
  });
}

function validatePalette() {
  if (paletteCold.checked === true) {
    formData.palette = 1;
  }
  if (paletteWarm.checked === true) {
    formData.palette = 2;
  }
  if (paletteMedium.checked === true) {
    formData.palette = 3;
  }
}

function validateForm() {
  isValid = true;
  if (formData.phone === '') {
    formData.phone = undefined;
  }
  for (let item in formData) {
    if (formData[item] === '') {
      isValid = false;
    }
  }
  return isValid;
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  // Usa fetch() para enviar una petición POST con datos codificados en JSON .
  const url =
    'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(formData), // data can be `string` or {object}!
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.error(error);
    });
});
const btn = document.querySelector('.twitterdiv');
function showURL(result) {
  const responseURL = document.querySelector('.form__share__text__p');

  if (result.success) {
    textError.classList.remove('js-hidden');
    btn.classList.remove('js-hidden');
    const textCard =
      'Echa un vistazo a mi tarjeta de visita, hecha con %23BotanicalProfileCards" 🌱 ';
    responseURL.innerHTML = `<span>🌱La tarjeta ha sido creada:</span><a href="${result.cardURL}" target="_blank" >${result.cardURL}</a>`;
    const twitterLink = document.querySelector('.twitter--link');
    submitButton.setAttribute('disabled', '');
    twitterLink.setAttribute(
      'href',
      `https://twitter.com/intent/tweet?text=${textCard}&url=${result.cardURL}&hashtags=Adalabers,JavaScript,PromoJemison,week7of12`
    );
  }
}

changeElement();

const createCard = document.querySelector('.form__share__submit');
createCard.addEventListener('click', showURL);

function resetTwitter() {
  btn.classList.add('js-hidden');
  const responseURL = document.querySelector('.form__share__text__p');
  responseURL.innerHTML = `<p class="form__share__text__p">
            ¡La tarjeta todavía no está lista para ser compartida!
            <span>Por favor, revisa los campos rellenos más arriba 🌱 </span>
          </p>`;
}
