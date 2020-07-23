import React from "react";
import Collapsable from "./Collapsable";

const Design = (props) => {
  return (
    <fieldset class="form__design">
      <Collapsable
        classh2="form__design__title"
        title="Diseña"
        icon="far fa-object-ungroup"
      />
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
    </fieldset>
  );
};

export default Design;
