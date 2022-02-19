import React from "react";
import './Promo.css';
import logo from '../../images/text__COLOR_landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <p className="promo__title">Учебный проект студента факультета Веб-разработки.</p>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__button" href="#techs">Узнать больше</a>
      </div>
      <img className="promo__logo" alt="логотип" src={logo} />
    </section>
  )
}

export default Promo;
