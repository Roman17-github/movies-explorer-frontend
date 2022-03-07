import React from "react";
import "./MoviesCard.css";

function MoviesCard({ title, link, duration, saved }) {
  const [ isMark, setMark ] = React.useState(false);
  const clickMark = () => {
    setMark(isMark ? false : true);
  }
  return (
    <div className="moviesCard">
      <div className="moviesCard__header">
        <div className="moviesCard__info">
          <p className="moviesCard__name">{title}</p>
          <p className="moviesCard_duration">{duration}</p>
        </div>

        {saved ? (
          <button className="moviesCard__mark moviesCard__mark_delete" onClick={clickMark} />
        ) : (<button className={isMark ? "moviesCard__mark moviesCard__mark_active" : "moviesCard__mark moviesCard__mark_disabled"} onClick={clickMark} />)}

      </div>
      <img className="moviesCard__foto" alt="картинка" src={link} />
    </div>
  )
};

export default MoviesCard;