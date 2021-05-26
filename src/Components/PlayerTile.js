import React, {useState } from 'react';
import cn from 'tailwindcss-classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

const PlayerTile = ({player, changePlayerScore, whosGo, leading}) => {
    const [ newScore, setNewScore ] = useState('');
    console.log(player.name, leading)
    const updateScore = (e) => {
        e.preventDefault();
        setNewScore(e.target.value)
    }
    
    return ( 

        <div className={cn("w-1/3  h-auto p-8 rounded-lg flex flex-col justify-evenly relative", {
            "border-white border-8": (whosGo && player.name === 'nick') || (!whosGo && player.name === 'Anne'),
            
           
            "bg-yellow-300": player.name !=='nick',
            "bg-red-600": player.name === 'nick'
        })} >
           <p>Player Name: {player.name}</p> 
           <p >Current Score: {player.score}</p> 
           {leading === player.name && <FontAwesomeIcon icon={faCrown} color="black" size="3x" className="absolute top-0 right-0 m-4"/>}
            <input className="text-black my-6" value={newScore} onChange={(e)=> updateScore(e)}/>
            <button className="border-none outline-none bg-green-500" onClick={()=>{
                changePlayerScore(player, newScore );
                 setNewScore(0)
            }}>Add  points</button>
             <button className="border-none outline-none bg-red-800 my-6" onClick={()=>{
                 const minusScore = newScore - (newScore * 2)
                changePlayerScore(player, minusScore );
                 setNewScore(0)
            }}>Remove points</button>


        </div>
     );
}
 
export default PlayerTile;