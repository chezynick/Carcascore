import React, { useState } from 'react';
import Header from './Components/Header'
import NavBar from './Components/Navbar'
import ScoreBoard from './Components/ScoreBoard'
import './App.css';

function App() {
const [ page, setPage ] = useState('newGame')
  return (
    <div className="bg-black text-white">
      <Header />
      <NavBar setPage={setPage}/>
      <div className="w-full h-screen">
      {page=== "newGame" && (
        <div>New Game page here</div>
      )}
      {page=== "scoreBoard" && (
        <ScoreBoard />
      )}
      {page=== "history" && (
        <div>Game history coming soon</div>
      )}</div>
    </div>
  );
}

export default App;
