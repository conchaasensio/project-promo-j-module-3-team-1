import React from 'react';
import '../../stylesheets/landing/_main.scss';
import { Link } from 'react-router-dom';
import LogoPagina from '../../images/logopagina.png';

const Main = (props) => {
  return (
    <main className="page__main">
      <div className="page__main--wrapper">
        <h1 className="page__main--title">
          <img src={LogoPagina} />
        </h1>
        <h2 className="page__main--subtitle">Crea tu tarjeta de visita</h2>
        <p className="page__main--text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
        <div className="page__main--container">
          <article>
            <i className="far fa-object-ungroup"></i>
            <p className="capitalize">diseña</p>
          </article>
          <article>
            <i className="far fa-keyboard"></i>
            <p className="capitalize">rellena</p>
          </article>
          <article>
            <i className="fas fa-share-alt"></i>
            <p className="capitalize">comparte</p>
          </article>
        </div>
        <Link to="/card" className="page__main--link uppercase">
          comenzar
        </Link>
      </div>
    </main>
  );
};

export default Main;
