import React from "react";
import Navigation from "../navigation/Navigation";
import "./Modal.css";
import { useLocation } from "react-router-dom";

function Modal({ isModal, close }) {
  const path = useLocation().pathname;
  return (
    <section className={isModal ? "modal modal_opened" : "modal"}>
      <div className="modal__main">
        <button className="modal__close" onClick={close}/>
        <div className="modal__links">
          <Navigation link="/" text="Главная" styles={`modal__link ${path === "/" ? "modal__link_active" : ""}`} />
          <Navigation link="/movies" text="Фильмы" styles={`modal__link ${path === "/movies" ? "modal__link_active" : ""}`} />
          <Navigation link="/saved-movies" text="Сохранённые фильмы" styles={`modal__link ${path === "/saved-movies" ? "modal__link_active" : ""}`} />
        </div>
        <Navigation link="/profile" text="Аккаунт" styles="modal__link_account" />
      </div>
    </section>
  )
};

export default Modal;