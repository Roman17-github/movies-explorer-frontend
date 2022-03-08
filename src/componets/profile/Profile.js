import React from "react";
import "./Profile.css";
import { currentUserContext } from "../../context/CurrentUserContext";

function Profile({ signOut }) {

  const [ name, setName ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const currentUser = React.useContext(currentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [ currentUser ]);

  return (
    <section className="profile">
      <h2 className="profile__title">Привет,{name}!</h2>
      <div className="profile__input-container">
        <p>Имя</p>
        <input placeholder="Имя" className="profile__input" value={name || ""} onChange={(e) => {setName( e.target.value)}} />
      </div>
      <div className="profile__input-container">
        <p>Email</p>
        <input placeholder="Email" className="profile__input" value={email || ""} onChange={(e) => {setEmail( e.target.value)}} />
      </div>
      <div className="profile__button-container">
        <button className="profile__button-edit">Редактировать</button>
        <button className="profile__button-exit" onClick={signOut}>Выйти из аккаунта</button>
      </div>

    </section>
  )
};

export default Profile;