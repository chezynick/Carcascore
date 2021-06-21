import React, { useEffect, useState} from 'react';
import FinalScore from './FinalScore';
import Button from './Button';
import PlayerTile from './PlayerTile';

const ScoreBoard = ({setShowQuitModal}) => {
    const [ p1, setP1 ] = useState({name:'nick', score: 0});
    const [ p2, setP2 ] = useState({name:'Anne', score: 0});
    const [ finalScore, setFinalScore ] = useState(false);
    const [ leading, setLeading ] = useState('')
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
        if(player.name==='nick'){setP1({name:player.name, score:totalScore})}
        else setP2({name:player.name, score:totalScore})
        
  }
  const toggleFinalScore = () =>{
    setFinalScore(!finalScore)
  }
  const resetGame = ()=>{ setShowQuitModal(true)}
    return ( 
        <div >
       {!finalScore && (<div className="w-full justify-evenly flex flex-col md:flex-row" >
           {players.map(player =>(
               <PlayerTile  key={player.name} player={player} leading={leading} changePlayerScore={changePlayerScore}/>
           ))}
           
           </div>)}
           {finalScore && (
            <FinalScore p1={p1} p2={p2}/>
        )}
         
           <footer className="w-full flex justify-evenly fixed bottom-0 items-center text-3xl md:mb-4">
              <Button func={toggleFinalScore} outline alternate name={!finalScore ? 'Game over?' : 'Return to game?'}/>
            <Button func={resetGame} alternate name="Quit game" />
     </footer>
           
        </div>
     );
}
 
export default ScoreBoard;