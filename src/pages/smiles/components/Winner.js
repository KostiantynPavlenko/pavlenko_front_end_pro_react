import React from "react";

import SmileItem from "./Item";

class SmileWinner extends React.Component {

  render() {
    const winner = this.props.winner;

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

}

export default SmileWinner;