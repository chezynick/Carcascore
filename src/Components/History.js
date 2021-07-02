import React, {useState, useEffect } from 'react';
import firebase from '../firebase';

const History = () => {
    //state settings
	const [scores, setScores] = useState();
	//get recipe info from firebase firestore
	useEffect(() => {
        const data = firebase.firestore().collection('scores');
		data.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
                console.log(doc.data)
				const actObj = doc.data();
				actObj.id = doc.id;
				items.push(actObj);
			});
			setScores(items);
        })
	},[]);
console.log(scores)
    return ( 
        <div>
        <div>History</div>
        {scores && scores.map(score => (
            <div key={score.id} className="flex w-2/3">
                <h3 className="w-1/3">{score.date}</h3>
                {score.players.map(player => (
                    <div className="flex w-2/3 justify-between" key={player.name}>{player.name} : {player.score}</div>
                ))}

                </div>
                
        )
        )}
        </div>
     );
}
 
export default History;