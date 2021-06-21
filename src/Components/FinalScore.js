import React from 'react';
import cn from 'tailwindcss-classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

const FinalScore = ({players}) => {
    
    const orderedPlayers = players.sort((a,b) => {return a.score < b.score ? 1 : -1} )
    
    let draw
    if(orderedPlayers[0].score === orderedPlayers[1].score ){
        draw = true
    }
    return ( 

<div className="w-full mt-12 flex flex-col items-center justify-center">
    <div className="w-3/4 bg-indigo-200 text-black font-bold text-5xl py-10 px-4 text-center rounded-2xl">
   {draw && (<div>Its a draw</div>) }
       {!draw && <div>{orderedPlayers[0].name} is the winner!!</div>}
       <div className="my-6 flex w-full justify-evenly flex-col ">
       {orderedPlayers.map(player => (
           <div  key={player.name} className={cn(" w-full  text-gray-800 text-lg flex items-stretch  md:text-4xl  p-8  justify-evenly ", {
            "bg-yellow-300": player.name === 'Anne',
            "bg-red-600": player.name === 'Nick',
            "bg-green-600": player.name === 'Amanda',
            "bg-blue-600": player.name === 'Matt',
        })} >
               <div className="w-1/3">{player.name}: </div> <div>{player.score}</div>
           </div>
       ))}
       </div>
       <FontAwesomeIcon icon={faDragon} size="5x" className="text-indigo-200 fill-current mt-4 md:mt-20"/>
       </div>
       </div>
     );
}
 
export default FinalScore;