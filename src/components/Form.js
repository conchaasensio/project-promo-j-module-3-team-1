import React from "react";
import "../stylesheets/form/_form.scss";
import "../stylesheets/preview/_preview.scss";
import "../stylesheets/common/_page.scss";
import Design from "./Design";

const Form = (props) => {
  return (
    <section class="page__form">
      <form action="/signup" method="post" class="js-form">
        <Design />
        <fieldset class="form__fill js-form__fill">
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
                  Por favor, revisa los campos rellenos más arriba 🌱{" "}
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
                {" "}
                <i className="fab fa-twitter"></i> Compartir en Twitter
              </a>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
