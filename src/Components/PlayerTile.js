import React, {useState } from 'react';
import cn from 'tailwindcss-classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

const PlayerTile = ({player, changePlayerScore, whosGo, leading}) => {
    const [ newScore, setNewScore ] = useState('');
    const updateScore = (e) => {
        e.preventDefault();
        setNewScore(e.target.value)
    }
    const addFunction = () =>{
        changePlayerScore(player, newScore );
        setNewScore('')
    }
    const minusFunction = () =>{
        const minusScore = newScore - (newScore * 2)
        changePlayerScore(player, minusScore );
         setNewScore('')
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
           {leading === player.name && <FontAwesomeIcon icon={faCrown} color="black" size="1x" className="absolute top-0 right-0 m-4"/>}
            <input type="numeric" min="1" max='99' pattern="[0-9]*" className="text-black my-2 md:my-6 outline-none md:py-3  text-center" value={newScore} maxLength={2} onKeyUp={e => {if(e.key==='Enter'){changePlayerScore(player, newScore );
                 setNewScore('')}} } onChange={(e)=> updateScore(e)}/>
            <div className='w-full flex justify-between text-white '>
            <Button func={addFunction}  name="Add"/>
            <Button func={minusFunction} name="Minus" outline/>
             

                </div>
        </div>
     );
}
 
export default PlayerTile;