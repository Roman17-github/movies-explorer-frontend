import React from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

function MoviesCard(card) {
  const path = useLocation().pathname;

  function g() {
    return card.savecards.some((item) => item.movieId === card.id);
  };

  function a() {
    return card.savecards.find((item) => item.movieId === card.id);
  };

  const clickMark = () => {
    if (g()) {
      card.deleteCard(a());
    } else {
      card.onSave(card);
    }
  };

  const onDelete = () => {
    card.deleteCard(card);
  };

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  };

  

  return (
    <div className="moviesCard">
      <div className="moviesCard__header">
        <div className="moviesCard__info">
          <p className="moviesCard__name">{card.title}</p>
          <p className="moviesCard_duration">{getTimeFromMins(card.duration)}</p>
        </div>
        {path === "/saved-movies" ? <button className="moviesCard__mark moviesCard__mark_delete" onClick={onDelete} /> :
          <button className={`moviesCard__mark ${g() ? "moviesCard__mark_active" : ""}`} onClick={clickMark} />}
      </div>
      <img className="moviesCard__foto" alt="картинка" src={card.src} onClick={() => window.open(card.link)} />
    </div>
  )
};

export default MoviesCard;