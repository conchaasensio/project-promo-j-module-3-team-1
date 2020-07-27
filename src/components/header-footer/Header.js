import React from "react";
//import '../stylesheets/App.scss';
import "../../stylesheets/footer-header/_header.scss";
import LogoPagina from "../../images/logopagina.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1>
          <a href="./index.html" tittle="Go to landing page">
            <img className="bigEntrance" src={LogoPagina} alt="girasol" />
          </a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
