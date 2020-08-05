import React from "react";

const ButtonReset = (props) => {
  return (
    <button className="button__reset" onClick={props.resetCard}>
      <i className="far fa-trash-alt"></i>
      <span className="button__reset--text">reset</span>
    </button>
  );
};

export default ButtonReset;
