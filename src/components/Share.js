import React from "react";
import Collapsable from "./Collapsable";

const Share = (props) => {
  return (
    <fieldset className="form__share">
      <Collapsable title="Comparte" icon="fas fa-share-alt" />
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
      </div>
    </fieldset>
  );
};

export default Share;
