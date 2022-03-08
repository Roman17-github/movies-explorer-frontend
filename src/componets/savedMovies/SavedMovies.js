import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import apiMain from "../../utils/MainApi";

function SavedMovies({ cards, deleteCard }) {


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

  const [ mountCount, setMountcount ] = React.useState(12);

  const count = () => {
    if (window.innerWidth >= 1023) {
      setMountcount(mountCount + 3);
    } else if (window.innerWidth < 1023) {
      setMountcount(mountCount + 2);
    }
  };



  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList deleteCard={deleteCard} saved={true} cards={cards} count={mountCount} />
    </section>
  )
};

export default SavedMovies;