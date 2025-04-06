import React from "react";
import { Download } from "lucide-react";
import { FaMedal } from "react-icons/fa"; // Medal icons

const getMedal = (rank) => {
  const medals = [
    { icon: <FaMedal color="#FFD700" title="1st Place" />, className: "gold-row" },
    { icon: <FaMedal color="#C0C0C0" title="2nd Place" />, className: "silver-row" },
    { icon: <FaMedal color="#CD7F32" title="3rd Place" />, className: "bronze-row" },
  ];
  return rank <= 3 ? medals[rank - 1] : null;
};

const PlayerCard = ({ player, rank }) => {
  const { playerName, logs = "Sample log content...", id, gamePoints } = player;
  const medal = getMedal(rank);

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
    <tr className={`player-row ${medal?.className || ""}`}>
      <td className="rank-cell">
  {rank === 1 ? (
    <FaMedal className="medal-icon gold" title="1st Place" />
  ) : rank === 2 ? (
    <FaMedal className="medal-icon silver" title="2nd Place" />
  ) : rank === 3 ? (
    <FaMedal className="medal-icon bronze" title="3rd Place" />
  ) : (
    rank
  )}
</td>

      <td>{playerName}</td>
      <td>#2025-{id}</td>
      <td>{gamePoints}</td>
      <td>
        <button className="download-btn" onClick={downloadLogs}>
          <Download size={18} />
        </button>
      </td>
    </tr>
  );
};

export default PlayerCard;
