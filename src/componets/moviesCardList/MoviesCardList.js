import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../moviesCard/MoviesCard";
import foto from "../../images/film.jpg";

function MoviesCardList({ cards, saved }) {
  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
        <MoviesCard title="33 слова о дизайне" link={foto} duration="1ч 47м" saved={saved} />
      </div>
      <button className="moviesCardList__add">Ещё</button>
    </div>
  )
}

export default MoviesCardList;
