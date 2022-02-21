import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";

function Movies({ cards }) {
  
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList cards={cards} />
      <button className="movies__add">Ещё</button>
    </section>
  )
}
export default Movies;