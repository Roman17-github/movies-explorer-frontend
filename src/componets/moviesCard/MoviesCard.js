import React from "react";
import "./MoviesCard.css";
import mainApi from "../../utils/MainApi";

function MoviesCard(card) {
  const [ isMark, setMark ] = React.useState(false);

  const clickMark = () => {
    setMark(isMark ? false : true);
    mainApi.savedMovies(card);
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
        {card.saved ? <button className="moviesCard__mark moviesCard__mark_delete" onClick={onDelete} /> :
          <button className={`moviesCard__mark ${isMark ? "moviesCard__mark_active" : ""}`} onClick={clickMark} />}
      </div>
      <img className="moviesCard__foto" alt="картинка" src={card.src} />
    </div>
  )
};

export default MoviesCard;