import React from "react";
import Collapsable from "./Collapsable";
import getDataFromApi from "../../services/api";
import "../../stylesheets/form/_form.scss";
import "../../stylesheets/preview/_preview.scss";
import "../../stylesheets/common/_page.scss";

const Share = (props) => {
  const handleCreateCardClick = (event) => {
    event.preventDefault();
    getDataFromApi();
    console.log("handle");
    console.log("res: ", getDataFromApi());
  };

  const isCrearTarjetaBtnDisabled = () =>
    !props.name ||
    !props.job ||
    !props.email ||
    !props.phone ||
    !props.linkedin ||
    !props.github ||
    !props.palette ||
    !props.photo;

  return (
    <fieldset className="form__share">
      <Collapsable
        classtitle="form__share__title"
        title="Comparte"
        icon="fas fa-share-alt"
        classcontainer="form__share__button"
      >
        <button
          onClick={handleCreateCardClick}
          className="form__share__submit border js-button-share"
          type="submit"
          value="Crear tarjeta"
          disabled={isCrearTarjetaBtnDisabled()}
        >
          <i className="far fa-address-card"></i>Crear tarjeta
        </button>
        <div className="form__share__text--error">
          <p className="form__share__text__p">
            ¡La tarjeta todavía no está lista para ser compartida!
            <span>Por favor, revisa los campos rellenos más arriba 🌱 </span>
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
      </Collapsable>
    </fieldset>
  );
};

export default Share;
