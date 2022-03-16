import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({ submit,loading }) {
  const navigate = useNavigate();
  const { register, formState: { errors,isValid }, handleSubmit } = useForm({
    mode: "onChange"
  });

  const submitForm = (input) => {
    submit(input);
  };

  const logoGo = () => {
    navigate("/");
  };

  return (
    <section className="register">
      <form className="register-container" onSubmit={handleSubmit(submitForm)} noValidate>
        <img className="register__logo" src={logo} onClick={logoGo} />
        <h2 className="register__title">Рады видеть!</h2>
        <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" type="email"
            {...register("email", {
              required: "обязательное поле",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
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
        <button className={`register__button } `} disabled={!isValid || loading}>{loading ? <div className="register__circle"></div> : "Войти"}</button>
        <div className="register__login-container">
          <p className="register__login-title">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__login-link">Регистрация</Link>
        </div>
      </form>
    </section>
  )
};

export default Login;