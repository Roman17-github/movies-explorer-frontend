import React from "react";
import "./SearchForm.css";
import Checkbox from "../checkbox/Checkbox";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';

function SearchForm({ submit }) {
  const pathSaved = useLocation().pathname === "/saved-movies";
  const { checkbox, input } = pathSaved ? false : JSON.parse(localStorage.getItem("ad")) || false;
  const [ isCheckbox, setCheckbox ] = React.useState(checkbox);
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();

  const submitForm = (input) => {
    submit(input.film, isCheckbox);  
  };

  React.useEffect(() => {
    setValue("film",input);
  },[]);

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