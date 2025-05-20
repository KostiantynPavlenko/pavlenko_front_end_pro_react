export default function SmileItem({ smile, votes, vote }) {
    
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