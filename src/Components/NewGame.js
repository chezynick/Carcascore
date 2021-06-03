import React from 'react';

const newGame = ({setNewGame, setPage}) => {
    return ( 
        <div className="flex flex-col w-full h-full items-center  mt-24">
          <h1 className="my-12">Start a new game??</h1>  
            <button className="outline-black bg-yellow-200 w-1/3 text-xl py-4 px-8 text-black" onClick={()=>{setNewGame(true); setPage('scoreBoard')}}>Click here!!</button>
        </div> 
     );
}
 
export default newGame;