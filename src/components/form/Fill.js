import React, { useEffect } from 'react';
import Collapsable from './Collapsable';
import ImageComponent from './ImageComponent';
import InputComponent from './InputComponent';

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
            handleInput={props.handleInput}
            value={props.name}
          ></InputComponent>
          <InputComponent
            labelTitle="Puesto"
            icon="fas fa-asterisk"
            htmlClass="box js-inputJob"
            type="text"
            descriptionContent="job"
            max="20"
            placeholder="Ej: Botánica"
            errorText="Introduce una profesión válida"
            handleInput={props.handleInput}
            value={props.job}
          ></InputComponent>

          <ImageComponent
            handleInput={props.handleInput}
            value={props.photo}
        
          />

          <InputComponent
            labelTitle="Email"
            icon="fas fa-asterisk"
            htmlClass="box js-inputEmail"
            type="email"
            descriptionContent="email"
            max=""
            placeholder="Ej: jeanne-baret@gmail.com"
            errorText="Introduce un email válido"
            handleInput={props.handleInput}
            value={props.email}
          ></InputComponent>
          <InputComponent
            labelTitle="Teléfono"
            icon=""
            htmlClass="box js-inputPhone"
            type="tel"
            descriptionContent="phone"
            max=""
            placeholder="Ej: 915327899"
            errorText="Introduce un teléfono válido"
            handleInput={props.handleInput}
            value={props.phone}
          ></InputComponent>
          <InputComponent
            labelTitle="Linkedin"
            icon="fas fa-asterisk"
            htmlClass="box js-inputLinkedin"
            type="text"
            descriptionContent="linkedin"
            max=""
            placeholder="Ej: JeanneBaret"
            errorText="Introduce un nombre de Linkedin"
            handleInput={props.handleInput}
            value={props.linkedin}
          ></InputComponent>
          <InputComponent
            labelTitle="Github"
            icon="fas fa-asterisk"
            htmlClass="box js-inputGithub"
            type="text"
            descriptionContent="github"
            max=""
            placeholder="Ej: JeanneBaret"
            errorText="Introduce un nombre de Github"
            handleInput={props.handleInput}
            value={props.github}
          ></InputComponent>
        </Collapsable>
      </div>
    </fieldset>
  );
};

export default Fill;
