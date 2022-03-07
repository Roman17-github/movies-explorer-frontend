import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../navigation/Navigation';
import { useLocation, useNavigate } from 'react-router-dom';

function Header({ loggedIn, modal }) {

  const path = useLocation().pathname;
  const navigate = useNavigate();
  const logoGo = () => {
    navigate("/");
  };
  
  return (
    <header className={path === "/" ? "header" : "header header_login"} >
      <img src={logo} alt="логотип" className="header__logo" onClick={logoGo} />
      <div className='header__profile'>
        {!loggedIn && (
          <>
            <Navigation link="/signup" text="Регистрация" styles="header__signup" />
            <Navigation link="/signin" text="Войти" styles="header__enter" />
          </>
        )}
        {loggedIn && (
          <>
            <Navigation link="/movies" text="Фильмы" styles="header__films" />
            <Navigation link="/saved-movie" text="Сохраненные фильмы" styles="header__savefilms" />
            <Navigation link="/profile" text="Аккаунт" styles="header__account" />
          </>
        )}
      </div>
      <button className="header__button" onClick={modal} />
    </header>
  );
}

export default Header;