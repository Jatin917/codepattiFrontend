import React from "react";
import Leaderboard from "./components/PlayerCard/Leaderboard.jsx";
import "./components/PlayerCard/PlayerCard.css"; 
import Description from './Components/Description'


const App = () => {
  let players = [
    {
      playerName: "Alice",
      id: "A01",
      gamePoints: 150,
      logs: "Alice played Draw 4, then skipped turn, then won."
    },
    {
      playerName: "Bob",
      id: "B02",
      gamePoints: 220,
      logs: "Bob played Reverse, then Wild, then challenged Draw 4."
    },
    {
      playerName: "Charlie",
      id: "C03",
      gamePoints: 180,
      logs: "Charlie skipped, drew 2 cards, then played Green 7."
    },
    {
      playerName: "David",
      id: "D04",
      gamePoints: 300,
      logs: "David dominated the round with multiple Draw 2s."
    },
    {
      playerName: "Varun",
      id: "E05",
      gamePoints: 800,
      logs: "Varun dominated the round with multiple Draw 2s."
    },
  ];
  
  const updateGamePoints= (id,newPoints)=> { 
     const newArr= players.map( (player)=> player.id === id? {...player,gamePoints:newPoints}:player)
     players= newArr;
  };

  const updateLogs = (id, newLogs) => {
    const newArr= players.map(player =>
        player.id === id ? { ...player, logs: newLogs } : player
      )
      players= newArr;
    
  };

  updateGamePoints("E05",500)
  updateLogs("E05", "Played draw4!")

  return (
    <div className="App">
      <Leaderboard players={players} />
      < Description className='bg-red-500 text-xl font-semibold text-center'    > </Description>
    </div>
  );
};

export default App;
