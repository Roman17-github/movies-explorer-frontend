import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__date">© 2022</p>
        <nav className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Roman17-github">Github</a>
          <a className="footer__link" href="https://vk.com/id168431987">Vkontake</a>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;