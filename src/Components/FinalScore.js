import React, {useState} from 'react';
import cn from 'tailwindcss-classnames';
import { startOfToday, format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import firebase from '../firebase';


const FinalScore = ({players, lightMode}) => {
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

<div className="flex flex-col items-center justify-center w-full md:mt-12">
    <div className="w-full px-4 py-4 text-5xl font-bold text-center text-black bg-indigo-200 md:w-3/4 md:py-10 md:rounded-2xl">
   {draw && (<div>Its a draw</div>) }
       {!draw && <div className="flex items-center justify-evenly"><FontAwesomeIcon icon={faDragon} size="2x" className="text-black fill-current "/> {orderedPlayers[0].name} is the winner!!</div>}
       <div className="flex flex-col w-full md:my-6 justify-evenly ">
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
       <Button lightMode={lightMode} func={saveFunc} disabled={isSaving} name={isSaving ? "Saving":"Save"}/>
       </div>
       </div>
     );
}
 
export default FinalScore;