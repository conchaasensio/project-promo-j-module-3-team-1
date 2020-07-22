import React from 'react';
import '../stylesheets/_form.scss';
import '../stylesheets/_form_design.scss';
import '../stylesheets/_form_fill.scss';
import '../stylesheets/_page.scss';
import '../stylesheets/_preview.scss';

const Form = (props) => {
  return (
    <div>
      <h2 className="form__design__title js-accordion-title js-accordion-title-active">
        <span>
          <i className="far fa-object-ungroup"></i>Diseña
        </span>
        <i className="fab fa-pagelines js-accordion-icon fa-rotate-180"></i>
      </h2>
      <div className="js-accordion-content js-accordion-content-open">
        <div className="design__container">
          <div className="design__container__colors">
            <h3>Colores</h3>
          </div>
          <div className="text-options-container">
            <ul className="text-options">
              <li>
                <small>Gingko</small>
              </li>
              <li className="flower-option">
                <small>Amapola</small>
              </li>
              <li>
                <small>Girasol</small>
              </li>
            </ul>
          </div>
          <div className="design__container__options">
            <label for="cold" className="cold">
              <input
                type="radio"
                id="cold"
                className="js-palette"
                name="palette"
                value="1"
                checked
              />
              <div className="palette-cold">
                <span className="a"></span>
                <span className="b"></span>
                <span className="c"></span>
              </div>
            </label>
            <label for="warm" className="warm">
              <input
                id="warm"
                type="radio"
                className="js-palette"
                name="palette"
                value="2"
              />
              <div className="palette-warm">
                <span className="a"></span>
                <span className="b"></span>
                <span className="c"></span>
              </div>
            </label>
            <label for="medium" className="medium">
              <input
                id="medium"
                type="radio"
                className="js-palette"
                name="palette"
                value="3"
              />
              <div className="palette-medium">
                <span className="a"></span>
                <span className="b"></span>
                <span className="c"></span>
              </div>
            </label>
          </div>
        </div>
        <div className="design__container__frame">
          <h3>Marco</h3>

          <div
            href="#"
            className="design__container__button js-frame-button js-frame-button-off"
          >
            <div className="design__container__button__round"></div>
          </div>
        </div>
      </div>
      <div className="border border__top">
        <h2 className="fill-title js-accordion-title">
          <span>
            <i className="far fa-keyboard"></i> rellena
          </span>
          <i className="fab fa-pagelines js-accordion-icon"></i>
        </h2>
        <div className="form-container js-accordion-content">
          <div className="form_control">
            <label className="label" for="name">
              Nombre completo
              <i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputName"
              type="text"
              id="name"
              name="name"
              maxlength="20"
              placeholder="Ej: Jeanne Baret"
              required
            />
            <small className="js-error-message">
              Introduce un nombre válido
            </small>
          </div>
          <div className="form_control">
            <label className="label" for="job">
              Puesto<i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputJob"
              type="text"
              id="job"
              name="job"
              maxlength="20"
              placeholder="Ej: Botánica"
              required
            />
            <small className="js-error-message">
              Introduce una profesión válida
            </small>
          </div>
          <div className="form_control">
            <label className="label" for="image">
              Imagen de perfil
              <i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <button className="button js__profile-trigger" type="button">
              Añadir imagen
            </button>
            <input
              type="file"
              name=""
              id="img-selector"
              className="action__hiddenField js__profile-upload-btn"
            />
            <div className="profile__preview js__profile-preview"></div>

            <label className="label" for="email">
              Email<i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputEmail"
              type="email"
              id="email"
              name="email"
              placeholder="Ej: jeanne-baret@gmail.com"
              required
            />
            <small className="js-error-message">
              Introduce un email válido
            </small>
          </div>
          <div className="form_control">
            <label className="label" for="phone">
              Teléfono
            </label>
            <input
              className="box js-inputPhone"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ej: 915327899"
            />
            <small className="js-error-message">
              Introduce un teléfono válido
            </small>
          </div>
          <div className="form_control">
            <label className="label" for="linkedin">
              Linkedin<i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputLinkedin"
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Ej: JeanneBaret"
              required
            />
            <small className="js-error-message">
              Introduce tu nombre de Linkedin
            </small>
          </div>
          <div className="form_control">
            <label className="label" for="github">
              Github<i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputGithub"
              type="text"
              id="github"
              name="github"
              placeholder="Ej: JeanneBaret"
              required
            />
            <small className="js-error-message">
              Introduce tu nombre de Github
            </small>
          </div>
        </div>
      </div>

      <section className="page__form">
        <form action="/signup" method="post" className="js-form">
          <fieldset className="form__design">
            <include src="./design.html"></include>
          </fieldset>
          <fieldset className="form__fill js-form__fill">
            <include src="./fill.html"></include>
          </fieldset>

          <fieldset className="form__share">
            <h2 className="form__share__title js-accordion-title">
              <span>
                <i className="fas fa-share-alt"></i>Comparte
              </span>
              <i className="fab fa-pagelines js-accordion-icon"></i>
            </h2>
            <div className="form__share__button js-accordion-content">
              <button
                className="form__share__submit border js-button-share"
                type="submit"
                value="Crear tarjeta"
                disabled
              >
                <i className="far fa-address-card"></i>Crear tarjeta
              </button>
              <div className="form__share__text--error">
                <p className="form__share__text__p">
                  ¡La tarjeta todavía no está lista para ser compartida!
                  <span>
                    Por favor, revisa los campos rellenos más arriba 🌱{' '}
                  </span>
                </p>
              </div>
              <div className="twitterdiv twitter--button js-hidden">
                <a
                  href=" "
                  className="twitter--link "
                  data-hashtags="#Adalab #promoJamison #Adalabers"
                  target="_blank"
                  title="
            Compartir en twitter"
                >
                  {' '}
                  <i className="fab fa-twitter"></i> Compartir en Twitter
                </a>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Form;
