import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <div className="register-container">
        <img className="register__logo" src={logo} />
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__input-container">
          <p className="register__input-title">Имя</p> 
          <input className="register__input" required />
        </div>
        <div className="register__input-container">
          <p className="register__input-title">E-mail</p>
          <input className="register__input" type="email" required />
        </div>
        <div className="register__input-container">
          <p className="register__input-title">Пароль</p>
          <input className="register__input" type="password" required />
        </div>
        <button className="register__button">Зарегистрироваться</button>
        <div className="register__login-container">
          <p className="register__login-title">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__login-link">Войти</Link>
        </div>
      </div>
    </section>
  )
};

export default Register;