export default function SmileItem({ smile, vote, votes }) {
  
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