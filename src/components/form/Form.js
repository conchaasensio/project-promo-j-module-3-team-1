import React from "react";
import "../../stylesheets/form/_form.scss";
import "../../stylesheets/preview/_preview.scss";
import "../../stylesheets/common/_page.scss";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

const Form = (props) => {
  return (
    <section className="page__form">
      <form action="/signup" method="post" className="js-form">
        <Design />
        <Fill />
        <Share />
      </form>
    </section>
  );
};

export default Form;
