import React from 'react';
import './App.css'

import Cabecera from "./components/layout/Header";
import Navegador from "./components/layout/Nav";
import PiePagina from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Cabecera/>
      <Navegador/>
      <PiePagina/> 
    </div>
  );
}

export default App;
