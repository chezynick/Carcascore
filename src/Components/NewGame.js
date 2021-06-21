import React from 'react';
import Button from './Button'

const newGame = ({setNewGame, setPage}) => {
  const startNew = ()=>{setNewGame(true); setPage('scoreBoard')}
    return ( 
        <div className="flex flex-col w-full h-full items-center text-2xl mt-24">
          <h1 className="my-12">Start a new game??</h1>  
          <Button outline alternate func={startNew} name="Click here"/>
        </div> 
     );
}
 
export default newGame;