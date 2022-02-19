import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="register">
      <div className="register-container">
        <img className="register__logo" src={logo} />
        <h2 className="register__title">Рады видеть!</h2>
        <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" type="email" required/>
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Пароль</p>
          <input className="register__input" type="password" required/>
        </div>
        <button className="register__button">Войти</button>
        <div className="register__login-container">
          <p className="register__login-title">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__login-link">Регистрация</Link>
        </div>
      </div>
    </section>
  )
};

export default Login;