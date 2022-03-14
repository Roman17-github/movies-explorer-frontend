import React from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

function MoviesCard(card) {
  const path = useLocation().pathname;
  const [ isMark, setMark ] = React.useState(false);

  function savecard() {
    return card.savecards.some((item) => item.movieId === card.id);
  };

  function deleteCard() {
    return card.savecards.find((item) => item.movieId === card.id);
  };

  const clickMark = () => {
    if (isMark) {
      setMark(false)
      card.deleteCard(deleteCard());
    } else {
      setMark(true)
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
   
  React.useLayoutEffect(() => {
    if (savecard()) {
      setMark(true)
    }
  }, [ card ])


  return (
    <div className="moviesCard">
      <div className="moviesCard__header">
        <div className="moviesCard__info">
          <p className="moviesCard__name">{card.title}</p>
          <p className="moviesCard_duration">{getTimeFromMins(card.duration)}</p>
        </div>
        {path === "/saved-movies" ? <button className="moviesCard__mark moviesCard__mark_delete" onClick={onDelete} /> :
          <button className={`moviesCard__mark ${isMark ? "moviesCard__mark_active" : ""}`} onClick={clickMark} />}
      </div>
      <img className="moviesCard__foto" alt="картинка" src={card.src} onClick={() => window.open(card.link)} />
    </div>
  )
};

export default MoviesCard;