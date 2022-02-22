import React from "react";
import "./SearchForm.css";
import Checkbox from "../checkbox/Checkbox";
import { useForm } from "react-hook-form";

function SearchForm() {

  const submitForm = (e) => {
    e.preventDefault();
  }
  const { register, formState: { errors }, handleSubmit } = useForm();
  console.log(errors.film)
  return (
    <form className="searchForm" onSubmit={handleSubmit(submitForm)} noValidate>
      <div className="searchForm__container">
        <input {...register("film", { required: "Нужно ввести ключевое слово" })} placeholder="фильм" className="searchForm__input" required />
        <span className="searchForm__error">{errors.film?.message}</span>
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