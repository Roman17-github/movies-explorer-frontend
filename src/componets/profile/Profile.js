import React from "react";
import "./Profile.css";
import { currentUserContext } from "../../context/CurrentUserContext";
import { useForm } from "react-hook-form";
import apiMain from "../../utils/MainApi";

function Profile({ signOut }) {
  const currentUser = React.useContext(currentUserContext);
  const [ name, setName ] = React.useState(currentUser.name);
  const [ email, setEmail ] = React.useState(currentUser.email);
  

  const { register, formState: { errors }, handleSubmit, setValue, watch } = useForm({
    mode: "onChange"
  });

  const changed = watch("name") === (name  || currentUser.name) && watch("email") === (email ||  currentUser.email);


  const edit = (input) => {
    apiMain.updateUser(input.name, input.email)
      .then(() => {
        setName(input.name);
        setEmail(input.email);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  React.useEffect(() => {
    setName(currentUser.name);
    setValue("name", currentUser.name);
    setValue("email", currentUser.email);

  }, [ currentUser ]);


  return (
    <form className="profile" onSubmit={handleSubmit(edit)}>
      <h2 className="profile__title">Привет,{name}!</h2>
      <div className="profile__input-container">
        <p>Имя</p>
        <input placeholder="Имя" className="profile__input"
          {...register("name", { required: "обязательное поле" })}
        />
      </div>
      <span className="profile__error">{errors.name?.message}</span>
      <div className="profile__input-container">
        <p>Email</p>
        <input placeholder="Email" className="profile__input"
          {...register("email", {
            required: "обязательное поле",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
              message: "Введите email"
            }
          })}
        />
      </div>
      <span className="profile__error">{errors.email?.message}</span>
      <div className="profile__button-container">
        <button className="profile__button-edit" disabled={changed} type="submit">Редактировать</button>
        <button className="profile__button-exit" onClick={signOut}>Выйти из аккаунта</button>
      </div>

    </form>
  )
};

export default Profile;