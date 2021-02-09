import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from "./components/portfolio";
import Nav from "./components/nav";
import Stickyfooter from "./components/stickyfooter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Portfolio />
      <Stickyfooter />
    </div>
  );
}

export default App;
