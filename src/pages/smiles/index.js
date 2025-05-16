import React from "react";
import SmilesList from "./components/List";

import "./Smiles.css";

class Smiles extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      smiles: [
        { id: 0, name: '😊', votes: 0 },
        { id: 1, name: '😢', votes: 0 },
        { id: 2, name: '😠', votes: 0 },
        { id: 3, name: '❤️', votes: 0 },
        { id: 4, name: '😲', votes: 0 }
      ],
      winner: null
    }
  }

  componentDidMount() {
    const smilesInfo = localStorage.getItem('smiles');

    if(smilesInfo) {
      this.setState({
        smiles: JSON.parse(smilesInfo)
      });
    }
  }

  smileVote = (id) => {    
    const updatedSmiles = this.state.smiles.map(smile => {
      if(smile.id === id) {
        return { ...smile, votes: smile.votes + 1 };
      }

      return smile;
    });

    this.setState({
      smiles: updatedSmiles
    });

    localStorage.setItem('smiles', JSON.stringify(updatedSmiles));
  }

  clearVotes = () => {
    const updatedSmiles = this.state.smiles.map(smile => {
      return { ...smile, votes: 0};
    });

    this.setState({
      smiles: updatedSmiles,
      winner: null
    })

    localStorage.setItem('smiles', JSON.stringify(updatedSmiles));
  }

  showWinner = () => {
    let winner = this.state.smiles.reduce((acc, smile) => {
      if (smile.votes > acc.votes) {
        acc = smile;
      }

      return acc;
    });
    
    if (winner.votes === 0) {
      winner = null;
    }

    this.setState({
      winner
    })
  }

  render() {
    return (
      <div>
        <SmilesList
          smiles={this.state.smiles}
          vote={this.smileVote}
          clearVotes={this.clearVotes}
          showWinner={this.showWinner}
          winner={this.state.winner}/>
      </div>
    );
  }


}

export default Smiles;