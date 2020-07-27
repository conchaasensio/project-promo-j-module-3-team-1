import React from "react";
import Collapsable from "./Collapsable";
import ImageComponent from "./ImageComponent";
import InputComponent from "./InputComponent";

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
          <InputComponent
            labelTitle="Nombre completo"
            icon="fas fa-asterisk"
            htmlClass="box js-inputName"
            type="text"
            descriptionContent="name"
            max="20"
            placeholder="Ej: Jeanne Baret"
            errorText="Introduce un nombre válido"
          >
          </InputComponent>
          <InputComponent
            labelTitle="Puesto"
            icon="fas fa-asterisk"
            htmlClass="box js-inputJob"
            type="text"
            descriptionContent="job"
            max="20"
            placeholder="Ej: Botánica"
            errorText="Introduce una profesión válida"
          >
          </InputComponent>

          <ImageComponent />

          <InputComponent
            labelTitle="Email"
            icon="fas fa-asterisk"
            htmlClass="box js-inputEmail"
            type="email"
            descriptionContent="email"
            max=""
            placeholder="Ej: jeanne-baret@gmail.com"
            errorText="Introduce un email válido"
          >
          </InputComponent>
          <InputComponent
            labelTitle="Teléfono"
            icon=""
            htmlClass="box js-inputPhone"
            type="tel"
            descriptionContent="phone"
            max=""
            placeholder="Ej: 915327899"
            errorText="Introduce un teléfono válido"
          >
          </InputComponent>
          <InputComponent
            labelTitle="Linkedin"
            icon="fas fa-asterisk"
            htmlClass="box js-inputLinkedin"
            type="text"
            descriptionContent="linkedin"
            max=""
            placeholder="Ej: JeanneBaret"
            errorText="Introduce un nombre de Linkedin"
          >
          </InputComponent>
          <InputComponent
            labelTitle="Github"
            icon="fas fa-asterisk"
            htmlClass="box js-inputGithub"
            type="text"
            descriptionContent="github"
            max=""
            placeholder="Ej: JeanneBaret"
            errorText="Introduce un nombre de Github"
          >
          </InputComponent>

        </Collapsable>
      </div>
    </fieldset >
  );
};

export default Fill;
