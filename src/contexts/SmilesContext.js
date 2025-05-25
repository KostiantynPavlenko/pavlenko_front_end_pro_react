import { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const SmileContext = createContext(null);

export default function SmileProvider({ children }) {

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

  const smileVote = useCallback((id) => {
    setSmiles(prevSmiles => {
      const updatedSmiles = prevSmiles.map(smile => {
        if(smile.id === id) {
          return { ...smile, votes: smile.votes + 1 };
        }

        return smile;
      });

      localStorage.setItem('smiles', JSON.stringify(updatedSmiles));

      return updatedSmiles;
    })
  }, [])

  const clearVotes = useCallback(() => {
    setSmiles(prevSmiles => {
      const updatedSmiles = prevSmiles.map(smile => {
        return { ...smile, votes: 0};
      });

      localStorage.setItem('smiles', JSON.stringify(updatedSmiles));

      return updatedSmiles;
    });

    setWinner(null);
  }, []);

  const showWinner = useCallback(() => {
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
  }, [smiles])

  const contextValue = useMemo( () => ({
    smiles,
    winner,
    smileVote,
    clearVotes,
    showWinner,
  }), [smiles, winner, smileVote, clearVotes, showWinner]);


  return (
    <SmileContext.Provider value={contextValue}>
      {children}
    </SmileContext.Provider>
  )

}