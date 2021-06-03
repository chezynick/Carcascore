import React from 'react';
const FinalScore = ({p1,p2}) => {

    return ( 

<div>
   {p1.score ===p2.score && (<div>Its a draw</div>) }
       {p1.score !== p2.score && <div>{p1.score > p2.score ? p1.name : p2.name} is the winner!!</div>}
       <h1>{p1.name} : {p1.score}</h1> <h1>{p2.name} : {p2.score}</h1>
       </div>
     );
}
 
export default FinalScore;