import React, {useState } from 'react';
import cn from 'tailwindcss-classnames';
import Button from './Button'

const PlayerTile = ({player, changePlayerScore, lightMode }) => {
    
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

        <div className={cn("md:w-1/3 w-full  text-gray-800 text-lg md:items-stretch md:mx-10 p-4 mb-4 md:rounded-lg flex flex-col justify-evenly relative", {
            "bg-yellow-300": player.name === 'Anne',
            "bg-red-600": player.name === 'Nick',
            "bg-green-600": player.name === 'Amanda',
            "bg-blue-600": player.name === 'Matt',
        })} >
            <div className="flex w-full text-3xl justify-evenly">
           <p>{player.name}</p> 
           <p >{player.score} pts</p> </div>
            <input type="numeric" min="1" max='99' pattern="[0-9]*" className="my-2 text-center text-black outline-none md:my-6 md:py-3" value={newScore} maxLength={2} onKeyUp={e => {if(e.key==='Enter'){addFunction()}}}  onChange={(e)=> updateScore(e)}/>
            <div className='flex justify-between w-full text-white '>
            <Button lightMode={lightMode} func={addFunction}  name="Add"/>
            <Button lightMode={lightMode} func={minusFunction} name="Minus" outline/>
           </div>
        </div>
     );
}
 
export default PlayerTile;