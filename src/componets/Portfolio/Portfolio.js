import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__link">
          <p className="portfolio__item" >Статичный сайт</p>
          <a className="portfolio__icon" href="https://github.com/Roman17-github/how-to-learn" target="blank"> </a>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__item" >Адаптивный сайт</p>
          <a className="portfolio__icon" href="https://github.com/Roman17-github/russian-travel" target="blank"> </a>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__item" >Одностраничное приложение</p>
          <a className="portfolio__icon" href="https://github.com/Roman17-github/react-mesto-api-full" target="blank"> </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;