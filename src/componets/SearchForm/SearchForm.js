import React from "react";
import "./SearchForm.css";
import Checkbox from "../checkbox/Checkbox";

function SearchForm() {
  return (
    <form className="searchForm">
      <div className="searchForm__container">
        <input placeholder="фильм" className="searchForm__input" />
        <button type="submit" className="searchForm__button"></button>
      </div>
      <div className="searchForm__filter">
        <p className="searchForm__filter-name">Короткометражки</p>
        <Checkbox />
      </div>
    </form>
  )
};

export default SearchForm;