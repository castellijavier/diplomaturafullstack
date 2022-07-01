import React from 'react';
import './App.css'; // linkea el estilo.
import '../src/styles/normalize.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";

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
    
      <BrowserRouter>
        <Navegador/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="episodios" element={<EpisodiosPage/>}/>
          <Route path="recomendaciones" element={<RecomendacionesPage/>}/>
          <Route path="fechas" element={<FechasPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>    

      <PiePagina/>
        
    </div>
  );
}

export default App;
