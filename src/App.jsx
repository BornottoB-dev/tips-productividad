import { useState } from 'react'

function App() {
  const [tips, setTips] = useState([
    { id: 1, text: 'Organiza tu día con una lista de tareas.', votes: 0 },
    { id: 2, text: 'Toma descansos cortos cada hora para mantener la concentración.', votes: 0 },
    { id: 3, text: 'Prioriza las tareas más importantes primero.', votes: 0 },
    { id: 4, text: 'Evita las distracciones apagando notificaciones.', votes: 0 },
    { id: 5, text: 'Establece metas realistas y alcanzables.', votes: 0 }
  ])

  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  const voteTip = () => {
    setTips(tips.map((tip, index) =>
      index === currentTipIndex ? { ...tip, votes: tip.votes + 1 } : tip
    ))
  }

  const showRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length)
    setCurrentTipIndex(randomIndex)
  }

  const mostValuedTip = tips.reduce((max, tip) => tip.votes > max.votes ? tip : max, tips[0])
  const hasVotes = tips.some(tip => tip.votes > 0)

  return (
    <div>
      <h1>Tips de Productividad</h1>

      <div>
        <h2>Tip Actual</h2>
        <p>{tips[currentTipIndex].text}</p>
        <p>Votos: {tips[currentTipIndex].votes}</p>
        <button onClick={voteTip}>Votar</button>
        <button onClick={showRandomTip}>Tip Aleatorio</button>
      </div>

      <div>
        <h2>Tip Más Valorado</h2>
        {hasVotes ? (
          <p>{mostValuedTip.text} (Votos: {mostValuedTip.votes})</p>
        ) : (
          <p>Todavía no hay votos.</p>
        )}
      </div>
    </div>
  )
}

export default App
