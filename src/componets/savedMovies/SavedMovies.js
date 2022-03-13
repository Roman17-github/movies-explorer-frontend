import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Preloader from "../preLoader/preLoader";

function SavedMovies({ cards, deleteCard, place, isLoading, onSubmit }) {
  const [ mountCount, setMountcount ] = React.useState(12);

  window.addEventListener("resize", () => {
    setTimeout(() => {
      if (window.innerWidth >= 1024) {
        setMountcount(12);
      } else if (window.innerWidth >= 480) {
        setMountcount(8);
      } else if (window.innerWidth < 480) {
        setMountcount(5);
      }
    }, 5000)
  });

  const count = () => {
    if (window.innerWidth >= 1023) {
      setMountcount(mountCount + 3);
    } else if (window.innerWidth < 1023) {
      setMountcount(mountCount + 2);
    }
  };



  return (
    <section className="savedMovies">
      <SearchForm submit={onSubmit} />
      {isLoading && (<Preloader />)}
      {cards.length === 0 && <p className="movies__place" >{place}</p>}
      {!isLoading && <MoviesCardList deleteCard={deleteCard} saved={true} cards={cards} count={mountCount} savecards={cards} />}
      {(mountCount < cards.length) && <button className="movies__add" onClick={count}>Ещё</button>}
    </section>
  )
};

export default SavedMovies;