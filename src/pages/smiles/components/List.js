import { useContext } from "react";
import SmileItem from "./Item";

import { ThemeContext } from "../../../contexts/ThemeContext";
import { SmileContext } from "../../../contexts/SmilesContext";

export default function SmilesList() {

  const { theme } = useContext(ThemeContext);
  const { smiles, smileVote } = useContext(SmileContext);

  return (
    <div>
      <h2 className="list-title">Smiles list</h2>
      <div className={`smile-list ${theme}`}>
        {smiles.map( smile => {
          return <SmileItem
            key={smile.id}
            smile={smile.name}
            votes={smile.votes}
            vote={() => smileVote(smile.id)}
          />
        })}
      </div>
    </div>
  )

}