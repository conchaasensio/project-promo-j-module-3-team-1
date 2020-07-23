import React from "react";
import Collapsable from "./Collapsable";

const Fill = (props) => {
  return (
    <fieldset class="form__fill js-form__fill">
      <div className="border border__top">
        <Collapsable title="Rellena" icon="far fa-keyboard" />
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
  );
};

export default Fill;
