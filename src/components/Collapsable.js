import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.icon = this.props.icon;
    this.classh2 = this.props.classh2;
    this.handleAccordion = this.handleAccordion.bind(this);
    this.state = {
      isOpen: true,
    };
  }
  handleAccordion() {
    /*console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.state.isOpen);*/

    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  }
  render() {
    console.log(this.state.isOpen);
    return (
      <>
        <h2 onClick={this.handleAccordion} className={this.props.classh2}>
          <span>
            <i className={this.props.icon}></i>
            {this.props.title}
          </span>
          <i className="fab fa-pagelines js-accordion-icon fa-rotate-180"></i>
        </h2>
        <div
          className={`js-accordion-content ${
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
