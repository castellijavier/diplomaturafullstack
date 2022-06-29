import React from 'react';
import './App.css'

import Cabecera from "./components/layout/Header";
import Navegador from "./components/layout/Nav";
import PiePagina from "./components/layout/Footer";

import HomePage from './pages/HomePage';
import EpisodiosPage from './pages/EpisodiosPage';
import RecomendacionesPage from './pages/RecomendacionesPage';
import FechasPage from './pages/FechasPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Cabecera/>
      <Navegador/>
      <HomePage/>
      <EpisodiosPage/> 
      <RecomendacionesPage/>
      <FechasPage/>
      <ContactoPage/>
      <PiePagina/>
    </div>
  );
}

export default App;
