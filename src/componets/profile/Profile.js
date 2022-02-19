import React from "react";
import "./Profile.css";

function Profile({ name, signOut }) {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет,{name}!</h2>
      <div className="profile__input-container">
        <p>Имя</p>
        <input placeholder="Имя" className="profile__input" />
      </div>
      <div className="profile__input-container">
        <p>Email</p>
        <input placeholder="Email" className="profile__input" />
      </div>
      <div className="profile__button-container">
        <button className="profile__button-edit">Редактировать</button>
        <button className="profile__button-exit" onClick={signOut}>Выйти из аккаунта</button>
      </div>

    </section>
  )
};

export default Profile;