import React from 'react';
import '../../stylesheets/form/_form.scss';
import '../../stylesheets/preview/_preview.scss';
import '../../stylesheets/common/_page.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

const Form = (props) => {
  return (
    <section className="page__form">
      <form method="post" className="js-form">
        <Design palette={props.palette} handleInput={props.handleInput} />
        <Fill handleInput={props.handleInput} />
        <Share
          name={props.name}
          job={props.job}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
          palette={props.palette}
          photo={props.photo}
        />
      </form>
    </section>
  );
};

export default Form;
