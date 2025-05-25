import { useContext } from "react";

import { SmileContext } from "../../../contexts/SmilesContext";

export default function SmileActions() {

  const { showWinner, clearVotes } = useContext(SmileContext);
  
  return (
    <div className="smiles-actions">
      <button onClick={() => showWinner()}>Show winner</button>
      <button onClick={() => clearVotes()}>Clear votes</button>
    </div>
  );

}