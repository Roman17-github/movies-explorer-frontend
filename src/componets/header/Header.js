import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../navigation/Navigation';

function Header({ loggedIn, modal }) {

  return (
    <header className={loggedIn ? "header header_login" : "header "} >
      <img src={logo} alt="логотип" className="header__logo" />
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