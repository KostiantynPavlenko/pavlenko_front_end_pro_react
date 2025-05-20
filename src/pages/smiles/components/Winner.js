import SmileItem from "./Item";

export default function SmileWinner({winner}){

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