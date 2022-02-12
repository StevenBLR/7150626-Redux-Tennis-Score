import React from "react";
import { useSelector } from "react-redux";
import { selectNbWins } from "./selectors";

function PlayerPoints({ playerId, playerName }) {
  const wins = useSelector(selectNbWins(playerId));
  return (
    <div className="player-games">
      <p>{playerName}</p>
      <p>
        {/* If player wins sup to 1 display wins with correct orthograph  */}
        {wins > 0
          ? wins > 1
            ? `${wins} jeux gagnés`
            : `${wins} jeu gagné`
          : "Aucun jeu gagné"}
      </p>
    </div>
  );
}

export default PlayerPoints;
