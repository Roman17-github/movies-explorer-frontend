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


function App() {
  const [ cards, setCards ] = React.useState([]);
  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ isLoggin, setLoggin ] = React.useState(true);
  const [ isModal, setModal ] = React.useState(false);
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
    navigate("/");
  };

  function modalOpen() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  return (
    <div className="App">
      {pathHeader.includes(location) && (<Header loggedIn={isLoggin} modal={modalOpen} />)}
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies cards={cards} />} />
          <Route path='/saved-movies' element={<SavedMovies cards={cards} />} />
          <Route path="/profile" element={<Profile name={currentUser.name} signOut={signOut} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </main>
      {pathFooter.includes(location) && (<Footer />)}
      <Modal isModal={isModal} close={modalClose} />
    </div>
  )
};

export default App;
