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
import ProtectedRoute from "../ProtectoRoute/ProtectoRoute";


function App() {
  const auth = localStorage.getItem("login");
  const [ cards, setCards ] = React.useState([]);
  const [ savecards, setsaveCards ] = React.useState([]);
  const [ currentUser, setCurrentUser ] = React.useState({});
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
    localStorage.removeItem("login");
    apiMain.remove();
    navigate("/");
    localStorage.removeItem("cards");
    localStorage.removeItem("ad");
    setCards([])
  };

  function modalOpen() {
    setModal(true);
  };

  function modalClose() {
    setModal(false);
  };

  function submitFormMovies(input, checkbox) {
    localStorage.setItem("ad", JSON.stringify({ input, checkbox }));
    setLoading(true);
    apiMovies()
      .then((data) => {
        return data.filter((card) => {
          if (checkbox) {
            return card.nameRU.toLowerCase().includes(input.toLowerCase()) && card.duration <= 40;
          } else {
            return card.nameRU.toLowerCase().includes(input.toLowerCase());
          }
        })
      })
      .then((data) => {
        if (data.length === 0) {
          setPlace("Ничего не найдено");
        }
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

  function submitFormSaved(input, checkbox) {

    async function findSaved() {
      return JSON.parse(localStorage.getItem("saveCards")).filter((card) => {
        if (checkbox) {
          return card.nameRU.toLowerCase().includes(input.toLowerCase()) && card.duration <= 40;
        } else {
          return card.nameRU.toLowerCase().includes(input.toLowerCase());
        }
      })
    };
    setLoading(true);
    findSaved()
      .then((res) => {
        setsaveCards(res);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  function register(input) {
    setLoading(true);
    apiMain.register(input.name, input.email, input.password)
      .then((res) => {
        localStorage.setItem("login", true);
        navigate("/movies");
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  function login(input) {
    setLoading(true);
    apiMain.login(input.email, input.password)
      .then(() => {
        localStorage.setItem("login", true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  function deleteCard(card) {
    apiMain.delete(card._id)
      .then(() => {
        setsaveCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err)
      })

  };

  function saveCard(card) {
    apiMain.savedMovies(card)
      .then((m) => {
        setsaveCards((state) => state.concat(m))
      })
  }


  React.useEffect(() => {
    if (localStorage.getItem("cards")) {
      setCards(JSON.parse(localStorage.getItem("cards")));
    };
    apiMain.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err.status === 401) {
          localStorage.removeItem("login");
          navigate("/signin");
        }
      })
  }, []);



  React.useEffect(() => {
    apiMain.getMovies()
      .then((res) => {
        localStorage.setItem("saveCards", JSON.stringify(res));
        setsaveCards(res);
      })
  }, [ navigate ]);



  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
        {pathHeader.includes(location) && (<Header loggedIn={auth} modal={modalOpen} />)}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<ProtectedRoute loggedIn={auth} component={<Movies onSave={saveCard} deleteCard={deleteCard} savecards={savecards} cards={cards} isLoading={isLoading} place={isPlace} submit={submitFormMovies} />} />} />
            <Route path="/saved-movies" element={<ProtectedRoute loggedIn={auth} component={<SavedMovies deleteCard={deleteCard} cards={savecards} place={isPlace} isLoading={isLoading} onSubmit={submitFormSaved} />} />} />
            <Route path="/profile" element={<ProtectedRoute loggedIn={auth} component={<Profile name={currentUser.name} signOut={signOut} />} />} />
            <Route path="/signup" element={<Register submit={register} loading={isLoading} />} />
            <Route path="/signin" element={<Login submit={login} loading={isLoading} />} />
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
