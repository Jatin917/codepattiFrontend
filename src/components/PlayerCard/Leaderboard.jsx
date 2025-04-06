import React from "react";
import PlayerCard from "./PlayerCard";

const Leaderboard = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.gamePoints - a.gamePoints);

  return (
    <div className="leaderboard-wrapper">
      <h2 className="leaderboard-title">Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>ID</th>
            <th>Points</th>
            <th>Download Logs</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <PlayerCard key={player.id} player={player} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
