import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../moviesCard/MoviesCard";
import { useLocation } from 'react-router-dom';

function MoviesCardList({ cards, count, deleteCard, savecards, onSave }) {
  const path = useLocation().pathname;

  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        {cards.map((card, index) => {
          if (index + 1 <= count) {
            return <MoviesCard
              deleteCard={deleteCard}
              onSave={onSave}
              savecards={savecards}
              title={card.nameRU}
              link={card.trailerLink}
              duration={card.duration}
              src={path==="/saved-movies" ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
              key={index}
              {...card} />
          }
        })}
      </div>
    </div>
  )
}

export default MoviesCardList;
