import { useEffect, useState } from "react";
import SmilesList from "./components/List";
import SmileWinner from "./components/Winner";

import "./Smiles.css";

export default function Smiles() {

  const [smiles, setSmiles] = useState([
      { id: 0, name: '😊', votes: 0 },
      { id: 1, name: '😢', votes: 0 },
      { id: 2, name: '😠', votes: 0 },
      { id: 3, name: '❤️', votes: 0 },
      { id: 4, name: '😲', votes: 0 }
  ]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const smilesInfo = localStorage.getItem('smiles');

    if(smilesInfo) {
      setSmiles(JSON.parse(smilesInfo))
    }
  }, []);

  const smileVote = (id) => {    
    const updatedSmiles = smiles.map(smile => {
      if(smile.id === id) {
        return { ...smile, votes: smile.votes + 1 };
      }

      return smile;
    });

    setSmiles(updatedSmiles);

    localStorage.setItem('smiles', JSON.stringify(updatedSmiles));
  }

  const clearVotes = () => {
    const updatedSmiles = smiles.map(smile => {
      return { ...smile, votes: 0};
    });

    setSmiles(updatedSmiles);
    setWinner(null);

    localStorage.setItem('smiles', JSON.stringify(updatedSmiles));
  }

  const showWinner = () => {
    let winner = smiles.reduce((acc, smile) => {
      if (smile.votes > acc.votes) {
        acc = smile;
      }

      return acc;
    });
    
    if (winner.votes === 0) {
      winner = null;
    }

    setWinner(winner);
  }

  return (
    <div>
      <SmilesList
        smiles={smiles}
        vote={smileVote}
        winner={winner}/>

      <div className="smiles-actions">
        <button onClick={() => showWinner()}>Show winner</button>
        <button onClick={() => clearVotes()}>Clear votes</button>
      </div>

      <SmileWinner
        winner={winner}/>
    </div>
  );

}