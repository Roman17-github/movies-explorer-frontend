import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({ submit }) {

  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: "onChange"
  });

  const submitForm = (input) => {
    submit(input);
  }

  return (
    <section className="register">
      <form className="register-container" onSubmit={handleSubmit(submitForm)} noValidate>
        <img className="register__logo" src={logo} />
        <h2 className="register__title">Рады видеть!</h2>
        <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" type="email"
            {...register("email", {
              required: "обязательное поле",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                message: "Введите email"
              }
            })}
            required />
          <span className="searchForm__error">{errors.email?.message}</span>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Пароль</p>
          <input className="register__input" type="password"
            {...register("password", { required: "обязательное поле" })}
            required />
          <span className="searchForm__error">{errors.password?.message}</span>
        </div>
        <button className="register__button">Войти</button>
        <div className="register__login-container">
          <p className="register__login-title">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__login-link">Регистрация</Link>
        </div>
      </form>
    </section>
  )
};

export default Login;