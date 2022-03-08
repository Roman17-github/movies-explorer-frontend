import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../moviesCard/MoviesCard";

function MoviesCardList({ cards, count, saved, deleteCard }) {

  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        {cards.map((card, index) => {
          if (index + 1 <= count) {
            return <MoviesCard
              deleteCard={deleteCard}
              title={card.nameRU}
              link={card.trailerLink}
              duration={card.duration}
              src={saved ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
              saved={saved}
              key={index}
              {...card} />
          }
        })}
      </div>
    </div>
  )
}

export default MoviesCardList;
