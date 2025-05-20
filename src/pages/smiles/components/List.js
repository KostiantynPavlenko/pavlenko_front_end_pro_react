import React from "react";

import SmileItem from "./Item";

class SmilesList extends React.Component {

  render() {
    const smiles = this.props.smiles;
    
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
      </div>
    )
  }

}

export default SmilesList;