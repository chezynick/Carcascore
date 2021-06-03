import React, { useEffect, useState } from 'react';
import FinalScore from './FinalScore'

const FinalCount = ({p1,p2}) => {
    const [playerOne, setPlayerOne ] = useState()
    const [ newScore, setNewScore ] = useState('');
    const [ playerTwo, setPlayerTwo ] = useState()
    const [ finalScore, setFinalScore ] = useState(false)
    
    const updateScore = (e) => {
        e.preventDefault();
        setNewScore(e.target.value)
    }
   useEffect(()=>{
       if(p1.score <= p2.score) {
           setPlayerOne({name:p1.name, score:p1.score, complete: false})
           setPlayerTwo({name:p2.name, score:p2.score, complete: false})
       }
       else{
        setPlayerTwo({name:p1.name, score:p1.score, complete: false})
        setPlayerOne({name:p2.name, score:p2.score, complete: false})
       }
   }, [p1,p2])
  const changePlayerScore = (score) => {
   
      if(!playerOne.complete){
        const totalScore = (Number(playerOne.score) + Number(score))
          setPlayerOne({name:playerOne.name, score:totalScore, complete:false})
      }
      else{
        const totalScore = (Number(playerOne.score) + Number(score)) 
        setPlayerTwo({name:playerTwo.name, score:totalScore, complete:false}) 
      }

  }
  const gameOver = () =>{
      if(playerOne.complete && playerTwo.complete ){
          setFinalScore(true)
      } 
      if(!playerOne.complete){
          setPlayerOne({name:playerOne.name, score:playerOne.score, complete:true})
      }
      else{
        setPlayerTwo({name:playerTwo.name, score:playerTwo.score, complete:true})
        setFinalScore(true)
      }
  }
       
    
    return ( 
        <div>
        {!finalScore && (
        <div>
          {!playerOne?.complete &&  (<div>{playerOne?.name} to go first in the final count!</div>)}
          {playerOne?.complete && !playerTwo?.complete && (<div>{playerTwo?.name} to go first in the final count!</div>)}

          
        <input className="text-black my-6 outline-none py-3 text-4xl text-center" value={newScore} onChange={(e)=> updateScore(e)}/>
            <div className='w-full flex justify-between text-white text-xl'>
            <button className=" w-32 border-none outline-none py-2 rounded-lg text-center bg-green-500" onClick={()=>{
                changePlayerScore( newScore );
                 setNewScore('')
            }}>Add</button>
             <button className="border-none outline-none py-4 w-32 rounded-lg  text-center bg-red-800 " onClick={()=>{
                 const minusScore = newScore - (newScore * 2)
                changePlayerScore( minusScore );
                 setNewScore('')
            }}>Minus</button>
        </div>
        
        <button onClick={gameOver}>Count complete, next player...</button>
        </div>)}
        {finalScore && (
            <FinalScore p1={playerOne} p2={playerTwo}/>
        )}
        </div> 
     );
}
 
export default FinalCount;