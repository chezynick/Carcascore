import React, {useState, useEffect } from 'react';
import moment from 'moment';
import Button from '../Components/Button'
import firebase from '../firebase';

const History = () => {
    //state settings
	const [scores, setScores] = useState();
    const [ viewGames, setViewGames ] = useState(false)
	//get recipe info from firebase firestore
	useEffect(() => {
        const data = firebase.firestore().collection('scores');
		data.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
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
        const todaysMonth = moment().format('MMMYY');
        const thisMonthScores = scores.filter(score => moment(score.date).format('MMMYY') === todaysMonth);
       return thisMonthScores.length
    }
    const winsLastMonth = (scores) =>{
        const todaysMonth = moment().subtract(1,'months').format('MMMYY');
        const thisMonthScores = scores.filter(score => moment(score.date).format('MMMYY') === todaysMonth);
       return thisMonthScores.length
    }
    console.log(scores);
    const highestWinningScore = (scores) => {
       const sortedScores = scores?.map(game => game.players[0]).sort((a,b) => a.score < b.score ? 1 : -1)
       return sortedScores || []
    }
    const highestWinningMargin = (scores) => {
        const addMarginToGameScore = scores?.map(game => {
            const winningMargin = game.players[0].score - game.players[1].score;
            return {...game, margin: winningMargin}
        })
        const sortByMargin = addMarginToGameScore?.sort((a,b) => a.margin < b.margin ? 1 : -1)
        return sortByMargin[0] || null
    }
    const largestMargin = highestWinningMargin(scores)
    return ( 
        <div className="w-full px-4 lg:w-3/4">
         {scores && (  
             <div className="p-4"> 
                <div>Current scores: Nick: {nickWins.length} - Anne: {anneWins.length}</div>
                <div>This month: Nick: {winsThisMonth(nickWins)} - Anne: {winsThisMonth(anneWins)}</div>
                <div>Last month: Nick: {winsLastMonth(nickWins)} - Anne: {winsLastMonth(anneWins)}</div>
                <div>Highest winning total: { highestWinningScore(scores)[0].name } - {highestWinningScore(scores)[0].score}  </div>
                {largestMargin && <div>Largest winning margin: {largestMargin.players[0].name} beat {largestMargin.players[1].name} by {largestMargin.margin}</div>}
            </div>)}
            <Button alternate func={()=>setViewGames(!viewGames)} name={viewGames ? 'Hide games' :'View all games'}/>
        {viewGames && scores && scores.map(score => (
            <div key={score.id} className="flex flex-col w-full lg:w-2/3">
                <div className="flex flex-row items-center w-full">
                    <h3 className="w-1/3 my-2 font-bold">{score.date}</h3>
                    {score.players.map(player => (
                    <div className="flex justify-between w-2/3 px-4" key={player.name.toLowerCase()}>{player.name.toLowerCase()} : {player.score}</div>
                        ))}
                </div>
            </div>
                
        )
        )}
        </div>
     );
}
 
export default History;