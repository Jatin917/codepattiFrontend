import './PlayerCard.css' 
import React from "react";
import { Download } from "lucide-react";

const PlayerCard = ({ playerName = "John Doe", logs = "Sample log content...",id='XYZ' }) => {
  const downloadLogs = () => {
    const element = document.createElement("a");
    const file = new Blob([logs], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${playerName.replace(" ", "_")}_logs.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="player-card">
      <div className="player-card-inner">
        <div className="player-header">
          <div>
            <h3 className="player-name">{playerName}</h3>
            <p className="player-role">UNO Challenger</p>
          </div>
          <button className="download-btn" onClick={downloadLogs}>
            <Download size={20} />
          </button>
        </div>
        <div className="player-footer">
          <span className="player-id">ID: #2025-{id}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
