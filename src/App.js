import React, { useState } from 'react';
import Header from './Components/Header'
import QuitModal from './Components/QuitModal';
import NavBar from './Components/Navbar'
import NewGame from './Components/NewGame'
import ScoreBoard from './Components/ScoreBoard'
import History from './Components/History'
import classnames from 'classnames'
import './App.css';

function App() {
const [ page, setPage ] = useState('newGame');
const [ lightMode, setLightMode] = useState(false);
const [ showQuitModal, setShowQuitModal] = useState(false);
const [ numberOfPlayers, setNumberOfPlayers] = useState();
//state settings


  return (
    <div className={ classnames("flex flex-col items-center w-full h-auto min-h-screen ",{
      'bg-black text-yellow-300' : !lightMode,
      'bg-white text-gray-500' : lightMode
    })}>
      <Header setShowQuitModal={setShowQuitModal} setLightMode={setLightMode} lightMode={lightMode}/>
      {showQuitModal && (<QuitModal setShowQuitModal={setShowQuitModal} lightMode={lightMode}/>)}
      {page !== 'scoreBoard' && (<NavBar setPage={setPage} page={page} lightMode={lightMode}/>)}
      <div className="w-full h-auto">
      {page=== "newGame" && (
        <NewGame lightMode={lightMode}  setPage={setPage} setNumberOfPlayers={setNumberOfPlayers}/>
      )}
      
      {page=== "scoreBoard" && (
        <div className="md:mt-12"> 
        <ScoreBoard lightMode={lightMode}  numberOfPlayers={numberOfPlayers} setShowQuitModal={setShowQuitModal} /></div>
      )}
      {page=== "history" && (
        <History lightMode={lightMode}/>
      )}</div>
    </div>
  );
}

export default App;
