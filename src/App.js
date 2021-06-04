import React, { useState } from 'react';
import Header from './Components/Header'
import NavBar from './Components/Navbar'
import NewGame from './Components/NewGame'
import ScoreBoard from './Components/ScoreBoard'
import './App.css';

function App() {
const [ page, setPage ] = useState('newGame');
const [ newGame, setNewGame ] =  useState(false);

  return (
    <div className="bg-black text-white w-full h-screen">
      <Header />
      {page !== 'scoreBoard' && (<NavBar setPage={setPage}/>)}
      <div className="w-full h-auto">
      {page=== "newGame" && (
        <NewGame setNewGame={setNewGame} setPage={setPage}/>
      )}
      {page=== "scoreBoard" && (
        <div className="md:mt-12"> 
        <ScoreBoard newGame={newGame} setNewGame={setNewGame}/></div>
      )}
      {page=== "history" && (
        <div>Game history coming soon</div>
      )}</div>
    </div>
  );
}

export default App;
