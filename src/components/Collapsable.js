import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.icon = this.props.icon;
  }
  render() {
    return (
      <h2 className="form__design__title js-accordion-title js-accordion-title-active">
        <span>
          <i className={this.props.icon}></i>
          {this.props.title}
        </span>
        <i className="fab fa-pagelines js-accordion-icon fa-rotate-180"></i>
      </h2>
    );
  }
}

export default Collapsable;
