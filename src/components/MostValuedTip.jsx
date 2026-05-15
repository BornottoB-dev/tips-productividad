function MostValuedTip({ tip, hasVotes }) {
  return (
    <div className="section-block">
      <h2>Tip Más Valorado</h2>
      {hasVotes ? (
        <>
          <p className="tip-text">{tip.text}</p>
          <p className="votes-label">Votos: <strong>{tip.votes}</strong></p>
        </>
      ) : (
        <p className="no-votes">Todavía no hay votos.</p>
      )}
    </div>
  )
}

export default MostValuedTip
