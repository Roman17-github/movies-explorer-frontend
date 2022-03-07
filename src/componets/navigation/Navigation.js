import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ link, styles, text }) {
  return (
    <Link to={link} className={`navigation ${styles}`}>{text}</Link>
  )
};

export default Navigation;