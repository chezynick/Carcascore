import React, { useState } from 'react';
import Button from './Button'

const NewGame = ({setNumberOfPlayers, setPage, lightMode}) => {
  const [ playerNumbers, setPlayerNumbers ] = useState(false)
  const startNew = ()=>{setPlayerNumbers(true)}

    return ( 
        <div className="flex flex-col items-center w-full h-full mt-24 text-2xl">
       {!playerNumbers && ( <div className="flex flex-col items-center justify-center w-full"><h1 className="my-12">Start a new game??</h1>  
           <Button lightMode={lightMode} outline alternate func={startNew} name="Click here"/></div> )}
          {playerNumbers && (
            <div className="text-center">
             <h3 className="mb-6">How many Players?</h3> 
              <div>
                <button className="w-16 h-16 mx-4 text-white bg-red-600 rounded-lg" onClick={()=>{
                  setPage('scoreBoard');
                  setNumberOfPlayers(2)
                }}>2</button>
              <button className="w-16 h-16 mx-4 text-white bg-yellow-300 rounded-lg" onClick={()=>{
                  setPage('scoreBoard');
                  setNumberOfPlayers(3)
                }}>3</button>
              <button className="w-16 h-16 mx-4 text-white bg-blue-600 rounded-lg" onClick={()=>{
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