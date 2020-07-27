import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.icon = this.props.icon;
    this.classtitle = this.props.classtitle;
    this.classcontainer = this.props.classcontainer;
    this.handleAccordion = this.handleAccordion.bind(this);
    this.state = {
      isOpen: true,
      isRotate: true,
    };
  }
  handleAccordion() {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
        isRotate: !prevState.isRotate,
      };
    });
  }
  render() {
    return (
      <>
        <h2 onClick={this.handleAccordion} className={this.props.classtitle}>
          <span>
            <i className={this.props.icon}></i>
            {this.props.title}
          </span>
          <i
            className={`fab fa-pagelines js-accordion-icon ${
              this.state.isRotate ? "fa-rotate-180" : ""
            }`}
          ></i>
        </h2>
        <div
          className={`${this.classcontainer} js-accordion-content ${
            this.state.isOpen ? "js-accordion-content-open" : ""
          }`}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Collapsable;
