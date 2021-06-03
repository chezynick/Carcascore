import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

const FinalScore = ({p1,p2}) => {

    return ( 

<div className="w-full mt-12 flex flex-col items-center justify-center">
    <div className="w-3/4 bg-indigo-200 text-black font-bold text-5xl py-10 px-4 text-center rounded-2xl">
   {p1.score ===p2.score && (<div>Its a draw</div>) }
       {p1.score !== p2.score && <div>{p1.score > p2.score ? p1.name : p2.name} is the winner!!</div>}
       <div className="my-6 flex w-full justify-evenly">
       <h1>{p1.name} : {p1.score}</h1> <h1>{p2.name} : {p2.score}</h1></div>
       </div>
       <FontAwesomeIcon icon={faDragon} size="7x" className="text-indigo-200 fill-current mt-20"/>
       </div>
     );
}
 
export default FinalScore;