import React from "react";

import SmileItem from "./Item";

class SmilesList extends React.Component {

  render() {
    const smiles = this.props.smiles;
    const winner = this.props.winner;
    
    return (
      <div>
        <h2 className="list-title">Smiles list</h2>
        <div className="smile-list">
          {smiles.map( smile => {
            return <SmileItem
              key={smile.id}
              smile={smile.name}
              votes={smile.votes}
              vote={() => this.props.vote(smile.id)}
            />
          })}
        </div>

        <div className="smiles-actions">
          <button onClick={() => this.props.showWinner()}>Show winner</button>
          <button onClick={() => this.props.clearVotes()}>Clear votes</button>
        </div>

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

export default SmilesList;