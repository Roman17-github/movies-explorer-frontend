import React from "react";
import "./SearchForm.css";
import Checkbox from "../checkbox/Checkbox";
import { useForm } from "react-hook-form";

function SearchForm() {

  const submitForm = (e) => {
    e.preventDefault();
  }
  const { register, formState: { isValid } } = useForm({
    mode: "all"
  });

  return (
    <form className="searchForm" onSubmit={submitForm} >
      <div className="searchForm__container">
        <input {...register("film", { required: true })} placeholder="фильм" className="searchForm__input" />
        <button type="submit" className={`searchForm__button ${!isValid ? "searchForm__button_disabled" : ""}`} disabled={!isValid} ></button>
      </div>
      <div className="searchForm__filter">
        <p className="searchForm__filter-name">Короткометражки</p>
        <Checkbox />
      </div>
    </form>
  )
};

export default SearchForm;