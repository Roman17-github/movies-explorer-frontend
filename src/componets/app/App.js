import React from "react";
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Main from '../main/Main';
import Footer from "../footer/Footer";
import Movies from '../movies/Movies';
import SavedMovies from '../savedMovies/SavedMovies';
import Profile from "../profile/Profile";
import Header from '../header/Header';
import Register from "../register/Register";
import Login from "../login/Login";
import NotFound from "../notFound/NotFound";
import Modal from "../modal/Modal";
import apiMovies from "../../utils/MoviesApi";
import apiMain from "../../utils/MainApi";
import { currentUserContext } from "../../context/CurrentUserContext";


function App() {
  const [ cards, setCards ] = React.useState([]);
  const [ savecards, setsaveCards ] = React.useState([]);
  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggin, setLoggin ] = React.useState(false);
  const [ isModal, setModal ] = React.useState(false);
  const [ isLoading, setLoading ] = React.useState(false);
  const [ isPlace, setPlace ] = React.useState("");
  const location = useLocation().pathname;
  const navigate = useNavigate();


  const pathHeader = [
    "/",
    "/movies",
    "/saved-movies",
    "/profile",
  ];

  const pathFooter = [
    "/",
    "/movies",
    "/saved-movies",
  ]

  function signOut() {
    setLoggin(false);
    apiMain.remove();
    navigate("/");
  };

  function modalOpen() {
    setModal(true);
  };

  function modalClose() {
    setModal(false);
  };

  function submitForm(input, checkbox) {
    setLoading(true);
    apiMovies()
      .then((data) => {
        return data.filter((card) => {
          if (checkbox) {
            return card.nameRU.toLowerCase().includes(input.toLowerCase()) && card.duration <= 60;
          } else {
            return card.nameRU.toLowerCase().includes(input.toLowerCase());
          }
        })
      })
      .then((data) => {
        if (data.length === 0) {
          setPlace("Ничего не найдено");
        }
        console.log(data);
        localStorage.setItem("cards", JSON.stringify(data));
        setCards(data);
      })
      .catch(() => {
        setPlace("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
      })
      .finally(() => {
        setLoading(false)
      })
  };

  function register(input) {
    apiMain.register(input.name, input.email, input.password)
      .then(() => {
        navigate("/movies");
        setLoggin(true);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  function login(input) {
    apiMain.login(input.email, input.password)
      .then(() => {
        navigate("/movies");
        localStorage.setItem("login", true);
        setLoggin(true);

      })
      .catch((err) => {
        console.log(err);
      })
  };

  const deleteCard = (card) => {
    apiMain.delete(card._id)
    .then(() => {
      setsaveCards((state) => state.filter((c) => c._id !== card._id));
    })
    
  }
  

  React.useEffect(() => {
    if (localStorage.getItem("cards")) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    };
    apiMain.getUserInfo()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggin(true);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);


  React.useEffect(() => {
    apiMain.getMovies()
      .then((res) => {
        setsaveCards(res);
      })
  }, [navigate]);

  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
        {pathHeader.includes(location) && (<Header loggedIn={isLoggin} modal={modalOpen} />)}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies  cards={cards} isLoading={isLoading} place={isPlace} submit={submitForm} />} />
            <Route path="/saved-movies" element={<SavedMovies deleteCard={deleteCard} cards={savecards} />} />
            <Route path="/profile" element={<Profile name={currentUser.name} signOut={signOut} />} />
            <Route path="/signup" element={<Register submit={register} />} />
            <Route path="/signin" element={<Login submit={login} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {pathFooter.includes(location) && (<Footer />)}
        <Modal isModal={isModal} close={modalClose} />
      </currentUserContext.Provider>
    </div>
  )
};

export default App;
