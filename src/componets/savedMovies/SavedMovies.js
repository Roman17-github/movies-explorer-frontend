import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";

function SavedMovies() {
  const [ cards, setCards ] = React.useState([]);
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList saved={true} cards={cards} />
    </section>
  )
};

export default SavedMovies;