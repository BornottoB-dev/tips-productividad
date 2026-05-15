function TipDetails({ tip }) {
  return (
    <div className="section-block">
      <h2>Tip Actual</h2>
      <p className="tip-text">{tip.text}</p>
      <p className="votes-label">Votos actuales: <strong>{tip.votes}</strong></p>
    </div>
  )
}

export default TipDetails
