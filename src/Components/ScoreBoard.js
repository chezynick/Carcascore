import React, {  useState} from 'react';
import FinalScore from './FinalScore';
import Button from './Button';
import PlayerTile from './PlayerTile';

const ScoreBoard = ({setShowQuitModal, numberOfPlayers }) => {
    
    const [ p1, setP1 ] = useState({name:'Nick', score: 0});
    const [ p2, setP2 ] = useState({name:'Anne', score: 0});
    const [ p3, setP3 ] = useState({name:'Amanda', score: 0});
    const [ p4, setP4 ] = useState({name:'Matt', score: 0});
   
    const [ finalScore, setFinalScore ] = useState(false);
    
   let players = [p1,p2]
  
        if(numberOfPlayers === 4){
            players.push(p3,p4)
        }
        if(numberOfPlayers === 3) {
            players.push(p3)
        }
    

    const changePlayerScore = (player, newScore) => {
        const totalScore = (Number(player.score) + Number(newScore))
        if(player===p1){setP1({...player, score:totalScore})}
        if(player===p2){setP2({...player, score:totalScore})}
        if(player===p3){setP3({...player, score:totalScore})}
        if(player===p4){setP4({...player, score:totalScore})}
       
  }
  const toggleFinalScore = () =>{
    setFinalScore(!finalScore)
  }
  
  const resetGame = ()=>{ setShowQuitModal(true)}
    return ( 
        <div >
            <div className="mb-12">
       {!finalScore && (<div className="w-full justify-evenly flex flex-col md:flex-row flex-wrap" >
           {players.map(player =>(
               <PlayerTile  key={player.name} player={player}  changePlayerScore={changePlayerScore}/>
           ))}
           
           </div>)}
           {finalScore && (
            <FinalScore players={players} />
        )}
         </div>
           <footer className="w-full flex justify-evenly fixed bottom-0 items-center text-3xl md:mb-4">
              <Button func={toggleFinalScore} outline alternate name={!finalScore ? 'Complete?' : 'Go back?'}/>
            <Button func={resetGame} alternate name="Quit game" />
     </footer>
           
        </div>
     );
}
 
export default ScoreBoard;