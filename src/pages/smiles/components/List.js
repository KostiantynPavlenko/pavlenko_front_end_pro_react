import SmileItem from "./Item";

export default function SmilesList({smiles, vote}) {

  return (
    <div>
      <h2 className="list-title">Smiles list</h2>
      <div className="smile-list">
        {smiles.map( smile => {
          return <SmileItem
            key={smile.id}
            smile={smile.name}
            votes={smile.votes}
            vote={() => vote(smile.id)}
          />
        })}
      </div>
    </div>
  )

}