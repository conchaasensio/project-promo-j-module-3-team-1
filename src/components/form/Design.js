import React from 'react';
import Collapsable from './Collapsable';
import PaletteComponent from './PaletteComponent';

const Design = (props) => {
  return (
    <fieldset className="form__design">
      <Collapsable
        classtitle="form__design__title"
        title="Diseña"
        icon="far fa-object-ungroup"
      >
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
            <PaletteComponent
              labelName="cold"
              value="1"
              palette="palette-cold"
              currentPalette={props.palette}
              handleInput={props.handleInput}
            ></PaletteComponent>

            <PaletteComponent
              labelName="warm"
              value="2"
              palette="palette-warm"
              currentPalette={props.palette}
              handleInput={props.handleInput}
            ></PaletteComponent>

            <PaletteComponent
              labelName="medium"
              value="3"
              palette="palette-medium"
              currentPalette={props.palette}
              handleInput={props.handleInput}
            ></PaletteComponent>
          </div>
        </div>
        {/* <div className="design__container__frame">
          <h3>Marco</h3>
          <div
            href="#"
            className="design__container__button js-frame-button js-frame-button-off"
          >
            <div className="design__container__button__round"></div>
          </div>
        </div> */}
      </Collapsable>
    </fieldset>
  );
};

export default Design;

{
  /* <flowerComponent
flowerName="Gingko">

</flowerComponent> */
}
