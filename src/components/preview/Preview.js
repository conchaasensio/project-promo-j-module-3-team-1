import React from "react";
import "../../stylesheets/form/_form.scss";
import "../../stylesheets/preview/_preview.scss";
import "../../stylesheets/common/_page.scss";
import "../../stylesheets/preview/_image_preview.scss";
import CardPreview from "./CardPreview";
import ButtonReset from "./Reset";

const Preview = (props) => {
  return (
    <section className="app__preview">
      <div className="button-container">
        <ButtonReset resetCard={props.resetCard} />
      </div>
      <CardPreview
        name={props.name}
        job={props.job}
        email={props.email}
        phone={props.phone}
        linkedin={props.linkedin}
        github={props.github}
        palette={props.palette}
        photo={props.photo}
      />
    </section>
  );
};

export default Preview;
