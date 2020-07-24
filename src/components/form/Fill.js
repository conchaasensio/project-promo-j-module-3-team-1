import React from "react";
import Collapsable from "./Collapsable";
import ImageComponent from "./ImageComponent";

const Fill = (props) => {
  return (
    <fieldset className="form__fill js-form__fill">
      <div className="border border__top">
        <Collapsable
          classtitle="fill-title"
          title="Rellena"
          icon="far fa-keyboard"
          classcontainer="form-container"
        >
          <div className="form_control">
            <label className="label" htmlFor="name">
              Nombre completo
              <i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputName"
              type="text"
              id="name"
              name="name"
              maxLength="20"
              placeholder="Ej: Jeanne Baret"
              required
            />
            <small className="js-error-message">
              Introduce un nombre válido
            </small>
          </div>
          <div className="form_control">
            <label className="label" htmlFor="job">
              Puesto<i className="fas fa-asterisk" aria-hidden="true"></i>
            </label>
            <input
              className="box js-inputJob"
              type="text"
              id="job"
              name="job"
              maxLength="20"
              placeholder="Ej: Botánica"
              required
            />
            <small className="js-error-message">
              Introduce una profesión válida
            </small>
          </div>
          <div className="form_control">
            <ImageComponent />
            <label className="label" htmlFor="email">
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
            <label className="label" htmlFor="phone">
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
            <label className="label" htmlFor="linkedin">
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
            <label className="label" htmlFor="github">
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
        </Collapsable>
      </div>
    </fieldset>
  );
};

export default Fill;
