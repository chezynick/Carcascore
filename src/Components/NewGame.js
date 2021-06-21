import React, { useState } from 'react';
import Button from './Button'

const NewGame = ({setNumberOfPlayers, setPage}) => {
  const [ playerNumbers, setPlayerNumbers ] = useState(false)
  const startNew = ()=>{setPlayerNumbers(true)}

    return ( 
        <div className="flex flex-col w-full h-full items-center text-2xl mt-24">
       {!playerNumbers && ( <div className="w-full flex justify-center flex-col items-center"><h1 className="my-12">Start a new game??</h1>  
           <Button outline alternate func={startNew} name="Click here"/></div> )}
          {playerNumbers && (
            <div className="text-center">
             <h3 className="mb-6">How many Players?</h3> 
              <div>
                <button className="bg-red-600 mx-4 w-16 h-16 rounded-lg text-white" onClick={()=>{
                  setPage('scoreBoard');
                  setNumberOfPlayers(2)
                }}>2</button>
              <button className="bg-yellow-300 mx-4 w-16 h-16 rounded-lg text-white" onClick={()=>{
                  setPage('scoreBoard');
                  setNumberOfPlayers(3)
                }}>3</button>
              <button className="bg-blue-600 mx-4 w-16 h-16 rounded-lg text-white" onClick={()=>{
                  setPage('scoreBoard');
                  setNumberOfPlayers(4)
                }}>4</button>
              </div>
              
            </div>
          )}
        </div> 
     );
}
 
export default NewGame;