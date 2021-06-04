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

        <div className={cn("md:w-1/3 w-full  text-gray-800 text-lg md:text-4xl  p-8 md:rounded-lg flex flex-col justify-evenly relative", {
            "border-white border-8": (whosGo && player.name === 'nick') || (!whosGo && player.name === 'Anne'),
            
           
            "bg-yellow-300": player.name !=='nick',
            "bg-red-600": player.name === 'nick'
        })} >
            <div className="w-full text-3xl md:text-4xl flex justify-evenly">
           <p>{player.name}</p> 
           <p >{player.score} pts</p> </div>
           {leading === player.name && <FontAwesomeIcon icon={faCrown} color="black" size="3x" className="absolute top-0 right-0 m-4"/>}
            <input className="text-black my-2 md:my-6 outline-none md:py-3  text-center" value={newScore} maxLength={2} onKeyUp={e => {if(e.key==='Enter'){changePlayerScore(player, newScore );
                 setNewScore('')}} } onChange={(e)=> updateScore(e)}/>
            <div className='w-full flex justify-between text-white '>
            <button className="w-1/2 md:w-32 border-none outline-none py-2 rounded-lg text-center bg-green-500" onClick={()=>{
                changePlayerScore(player, newScore );
                 setNewScore('')
            }}>Add</button>
             <button className="w-1/2 border-none outline-none py-4 md:w-32 rounded-lg  text-center bg-red-800 " onClick={()=>{
                 const minusScore = newScore - (newScore * 2)
                changePlayerScore(player, minusScore );
                 setNewScore('')
            }}>Minus</button></div>


        </div>
     );
}
 
export default PlayerTile;