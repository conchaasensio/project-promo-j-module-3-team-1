import React from 'react';
import '../../stylesheets/form/_form.scss';
import '../../stylesheets/preview/_preview.scss';
import '../../stylesheets/common/_page.scss';
import '../../stylesheets/preview/_image_preview.scss';
import CardPreview from './CardPreview';

const Preview = (props) => {
  return (
    <section className="app__preview">
      <div className="button-container">
        <button className="button__reset">
          <i className="far fa-trash-alt"></i>
          <span className="button__reset--text">reset</span>
        </button>
      </div>
      <CardPreview name="Jeanne Baret" job="Botánica" />
    </section>
  );
};

export default Preview;
