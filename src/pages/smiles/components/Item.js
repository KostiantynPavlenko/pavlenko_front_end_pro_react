import React from "react";

class SmileItem extends React.Component {

  render() {
    const { smile, votes, vote} = this.props;
    
    return (
      <div className="smile-container">
        <div 
          className="smile"
          onClick={vote}
        >{smile}
        </div>
        <span>{votes}</span>
      </div>
    )
  }
  
}

export default SmileItem;