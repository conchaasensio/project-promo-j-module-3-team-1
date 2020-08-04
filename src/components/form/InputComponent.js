import React from 'react';
import PropTypes from 'prop-types';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const data = {
      inputKey: event.currentTarget.id, //name, job, linked
      inputValue: event.currentTarget.value,
    };
    this.props.handleInput(data);
  }

  render() {
    return (
      <div className="form_control">
        <label className="label" htmlFor={this.props.descriptionContent}>
          {this.props.labelTitle}
          <i className={this.props.icon} aria-hidden="true"></i>
        </label>
        <input
          className={this.props.htmlClass}
          type={this.props.type}
          id={this.props.descriptionContent}
          name={this.props.descriptionContent}
          maxLength={this.props.max}
          placeholder={this.props.placeholder}
          required
          onChange={this.handleChange}
        />
        <small className="js-error-message">{this.props.errorText}</small>
      </div>
    );
  }
}

InputComponent.propTypes = {
  labelTitle: PropTypes.string,
  htmlClass: PropTypes.string,
  descriptionContent: PropTypes.string,
};

export default InputComponent;
