import React from "react";
import "./SearchForm.css";
import Checkbox from "../checkbox/Checkbox";
import { useForm } from "react-hook-form";

function SearchForm({ submit }) {

  const [ isCheckbox, setCheckbox ] = React.useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const submitForm = (input) => {
    submit(input.film, isCheckbox);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit(submitForm)} noValidate>
      <div className="searchForm__container">
        <input  {...register("film", { required: "Нужно ввести ключевое слово" })} placeholder="фильм" className="searchForm__input" required />
        <span className="searchForm__error">{errors.film?.message}</span>
        <button type="submit" className="searchForm__button" ></button>
      </div>
      <div className="searchForm__filter">
        <p className="searchForm__filter-name">Короткометражки</p>
        <Checkbox isCheckbox={isCheckbox} setCheckbox={setCheckbox} />
      </div>
    </form>
  )
};

export default SearchForm;