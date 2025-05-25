import { useContext } from "react";
import SmileItem from "./Item";

import { SmileContext } from "../../../contexts/SmilesContext";

export default function SmileWinner(){

  const { winner } = useContext(SmileContext);

  return (
    <div>
      {
        winner && (
          <div>
            <h3 className="winner-title">Winner</h3>
            <div className="winner-container">
              <SmileItem
                smile={winner.name}
                votes={winner.votes}
                vote={() => {}}
              />
            </div>
          </div>
        )
      }
    </div>
  )

}