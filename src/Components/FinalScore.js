import React, {useState} from 'react';
import cn from 'tailwindcss-classnames';
import { startOfToday, format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import firebase from '../firebase';


const FinalScore = ({players}) => {
    const [ isSaving, setIsSaving ] = useState(false)
    const orderedPlayers = players.sort((a,b) => {return a.score < b.score ? 1 : -1} )
    const saveFunc = () =>{
        setIsSaving(true);
        firebase.firestore().collection('scores').add({
			date: format(startOfToday(), "dd-MMM-yyyy"),
            players: players
		}).then(()=>{

            window.location.reload()
        })
    }
    let draw
    if(orderedPlayers[0].score === orderedPlayers[1].score ){
        draw = true
    }
    return ( 

<div className="w-full md:mt-12 flex flex-col items-center justify-center">
    <div className=" w-full md:w-3/4 bg-indigo-200 text-black font-bold text-5xl py-4 md:py-10 px-4 text-center md:rounded-2xl">
   {draw && (<div>Its a draw</div>) }
       {!draw && <div className="flex items-center justify-evenly"><FontAwesomeIcon icon={faDragon} size="2x" className="text-black fill-current "/> {orderedPlayers[0].name} is the winner!!</div>}
       <div className="md:my-6 flex w-full justify-evenly flex-col ">
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
       <Button func={saveFunc} disabled={isSaving} name={isSaving ? "Saving":"Save"}/>
       </div>
       </div>
     );
}
 
export default FinalScore;