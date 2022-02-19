import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <h2 className="notfound__code">404</h2>
      <p className="notfound__title">страница не найдена</p>
      <Navigation link="/" text="назад" styles="notfound__link" />
    </section>
  )
};

export default NotFound;