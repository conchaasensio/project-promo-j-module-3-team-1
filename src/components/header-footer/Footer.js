import React from "react";
import LogoAdalab from "../../images/logo-adalab.png";
import LiveCodeTeam from "../../images/livecodeteam.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className=" wrapper">
        <div className="footer__copy">
          <img src={LiveCodeTeam} />
        </div>
        <a className="footer__logo" href="https://adalab.es/">
          <img src={LogoAdalab} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
