import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import Preloader from "../preLoader/preLoader";

function Movies({ cards, savecards, isLoading, place, submit, deleteCard,onSave }) {
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
    <section className="movies">
      <SearchForm submit={submit} />
      {isLoading && (<Preloader />)}
      {cards.length === 0 && <p className="movies__place" >{place}</p>}
      {!isLoading && <MoviesCardList deleteCard={deleteCard} savecards={savecards} cards={cards} count={mountCount} onSave={onSave} />}
      {(mountCount < cards.length) && <button className="movies__add" onClick={count}>Ещё</button>}
    </section>
  )
}
export default Movies;