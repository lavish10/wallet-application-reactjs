import React from 'react';
import './App.css';
import Wallet from "./components/Wallet/Wallet";

function App(props) {
  const id = window.location.pathname.substring(1);
  return (
    <Wallet id={id}/>
  );
}

export default App;
