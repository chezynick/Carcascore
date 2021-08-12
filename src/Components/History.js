import React, {useState, useEffect } from 'react';
import moment from 'moment';
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
            const orderByDate = items.sort((a,b) => {
                return moment(a.date).isBefore(moment(b.date)) ? 1 : -1})
			setScores(orderByDate);
        })
	},[]);
    const nickWins = scores?.filter(score => score.players[0].name.toLowerCase() === 'nick');
    const anneWins = scores?.filter(score => score.players[0].name.toLowerCase() === 'anne');
    const winsThisMonth = (scores) =>{
        const todaysMonth = moment().format('MMM');
        const thisMonthScores = scores.filter(score => moment(score.date).format('MMM') === todaysMonth);
       return thisMonthScores.length
    }
    const winsLastMonth = (scores) =>{
        const todaysMonth = moment().subtract(1,'months').format('MMM');
        const thisMonthScores = scores.filter(score => moment(score.date).format('MMM') === todaysMonth);
       return thisMonthScores.length
    }
    return ( 
        <div className="px-4 w-3/4 mx-auto">
         {scores && (  
             <div> <div>Current scores - total games so far : {scores.length}</div>
           <div className="flex w-full justify-evenly"> <div>Nick: {nickWins.length}</div>
            <div>Anne: {anneWins.length}</div></div>
            <div>This month: Nick: {winsThisMonth(nickWins)} - Anne: {winsThisMonth(anneWins)}</div>
            <div>Last month: Nick: {winsLastMonth(nickWins)} - Anne: {winsLastMonth(anneWins)}</div></div>)}
        {scores && scores.map(score => (
            <div key={score.id} className="flex w-full flex-col lg:w-2/3">
                <div className="flex w-full flex-row items-center">
                <h3 className="w-2/3 font-bold my-2">{score.date}</h3>
                
                {score.players.map(player => (
                    <div className="flex px-4  w-full sm:w-2/3 justify-between" key={player.name.toLowerCase()}>{player.name.toLowerCase()} : {player.score}</div>
                ))}
                </div>
                </div>
                
        )
        )}
        </div>
     );
}
 
export default History;