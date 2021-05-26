import React, { useEffect, useState} from 'react';


import PlayerTile from './PlayerTile'

const ScoreBoard = () => {
    const [ p1, setP1 ] = useState({name:'nick', score: 0});
    const [ p2, setP2 ] = useState({name:'Anne', score: 0});
    const [ whosGo, setWhosGo ] = useState(true);
    const [ leading, setLeading ] = useState('')
    const players = [p1,p2]
 
    useEffect(()=>{

        if(p1.score > p2.score){
            console.log('getting here')
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
        <div>
        <div className="w-full justify-evenly flex" >
           {players.map(player =>(
               <PlayerTile whosGo={whosGo} key={player.name} player={player} leading={leading} changePlayerScore={changePlayerScore}/>
           ))}
           
           </div>
        </div>
     );
}
 
export default ScoreBoard;