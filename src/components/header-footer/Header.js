import React from 'react';
//import '../stylesheets/App.scss';
import { Link } from 'react-router-dom';
import '../../stylesheets/footer-header/_header.scss';
import LogoPagina from '../../images/logopagina.png';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrapper">
        <h1>
          <Link to="/" tittle="Go to landing page">
            <img className="bigEntrance" src={LogoPagina} alt="girasol" />
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
