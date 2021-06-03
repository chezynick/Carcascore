import React, { useEffect, useState} from 'react';
import FinalCount from './FinalCount'


import PlayerTile from './PlayerTile'

const ScoreBoard = () => {
    const [ p1, setP1 ] = useState({name:'nick', score: 0});
    const [ p2, setP2 ] = useState({name:'Anne', score: 0});
    const [ whosGo, setWhosGo ] = useState(true);
    const [ leading, setLeading ] = useState('')
    const [finalCountUp, setFinalCountUp] = useState(false);
    const players = [p1,p2]
 
    useEffect(()=>{

        if(p1.score > p2.score){
            setLeading('nick')
        }  if (p2.score > p1.score){
            setLeading('Anne')
        }
    },[p1.score, p2.score])
    const changePlayerScore = (player, newScore) => {
        const totalScore = (Number(player.score) + Number(newScore))
        setWhosGo(!whosGo);
        if(player.name==='nick'){setP1({name:player.name, score:totalScore})}
        else setP2({name:player.name, score:totalScore})
        
  }
    return ( 
        <div >
       {!finalCountUp && (<div className="w-full justify-evenly flex" >
           {players.map(player =>(
               <PlayerTile whosGo={whosGo} key={player.name} player={player} leading={leading} changePlayerScore={changePlayerScore}/>
           ))}
           
           </div>)}
           {finalCountUp && (<FinalCount p1={p1} p2={p2} changePlayerScore={changePlayerScore}/>)}
           <footer className="w-full flex justify-evenly fixed bottom-0 items-center mb-4">
               <button className="w-1/3 bg-black text-yellow-200 border-2 border-yellow-200 py-4 px-6 text-xl font-bold outline-none " onClick={()=>setFinalCountUp(!finalCountUp)}>{finalCountUp ? 'Return to main game screen' :'Enter Final count mode!'}</button>
               <button className="w-1/3 bg-yellow-200 text-black py-4 px-6 text-xl font-bold outline-none border-none" onClick={()=>{setP1({name:'nick', score: 0}); setP2({name:'Anne', score: 0}); setFinalCountUp(false)}}>ReStart Game</button>
           </footer>
        </div>
     );
}
 
export default ScoreBoard;