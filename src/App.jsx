// Importamos useState de React para manejar el estado de la aplicación
import { useState } from 'react'
import './App.css'

function App() {
  // Estado que guarda la lista de tips con sus votos
  // Cada tip es un objeto con id, texto y número de votos
  const [tips, setTips] = useState([
    { id: 1, text: 'Organiza tu día con una lista de tareas.', votes: 0 },
    { id: 2, text: 'Toma descansos cortos cada hora para mantener la concentración.', votes: 0 },
    { id: 3, text: 'Prioriza las tareas más importantes primero.', votes: 0 },
    { id: 4, text: 'Evita las distracciones apagando notificaciones.', votes: 0 },
    { id: 5, text: 'Establece metas realistas y alcanzables.', votes: 0 }
  ])

  // Estado que guarda cuál tip se está mostrando actualmente (por su índice en el array)
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  // Función que se ejecuta cuando el usuario hace clic en "Votar"
  // Aumenta en 1 el número de votos del tip que se está mostrando
  const voteTip = () => {
    // Usamos setTips para actualizar el estado
    // Creamos una copia del array anterior y modificamos solo el tip actual
    setTips((prevTips) =>
      prevTips.map((tip, index) =>
        index === currentTipIndex ? { ...tip, votes: tip.votes + 1 } : tip
      )
    )
  }

  // Función que se ejecuta cuando el usuario hace clic en "Tip Aleatorio"
  // Elige un tip al azar y lo muestra, pero no repite el mismo dos veces seguidas
  const showRandomTip = () => {
    if (tips.length < 2) return

    // Elegimos un índice aleatorio diferente al actual
    let nextIndex = currentTipIndex
    while (nextIndex === currentTipIndex) {
      nextIndex = Math.floor(Math.random() * tips.length)
    }

    // Actualizamos el estado con el nuevo índice
    setCurrentTipIndex(nextIndex)
  }

  // Función que se ejecuta cuando el usuario hace clic en "Reiniciar votos"
  // Pone todos los votos en 0
  const resetVotes = () => {
    // Creamos una copia del array y ponemos votes: 0 en cada tip
    setTips((prevTips) => prevTips.map((tip) => ({ ...tip, votes: 0 })))
  }

  // Calculamos cuál es el tip con más votos
  // Usamos reduce para encontrar el tip con el mayor número de votos
  const mostValuedTip = tips.reduce(
    (best, tip) => (tip.votes > best.votes ? tip : best),
    tips[0] // Empezamos comparando con el primer tip
  )

  // Verificamos si hay algún tip con votos (más de 0)
  const hasVotes = mostValuedTip.votes > 0

  // Esta parte dibuja la interfaz de usuario
  return (
    <div className="app-container">
      {/* Título principal de la aplicación */}
      <h1>Tips de Productividad</h1>

      {/* Sección que muestra el tip actual */}
      <section>
        <h2>Tip Actual</h2>
        {/* Mostramos el texto del tip actual */}
        <p>{tips[currentTipIndex].text}</p>
        {/* Mostramos cuántos votos tiene */}
        <p className="votes-info">Votos: {tips[currentTipIndex].votes}</p>
        {/* Botón para votar el tip actual */}
        <button onClick={voteTip}>Votar</button>
        {/* Botón para mostrar un tip aleatorio */}
        <button onClick={showRandomTip}>Tip Aleatorio</button>
        {/* Botón para reiniciar todos los votos */}
        <button onClick={resetVotes} className="reset-button">Reiniciar votos</button>
      </section>

      {/* Sección que muestra el tip más valorado */}
      <section>
        <h2>Tip Más Valorado</h2>
        {/* Si hay votos, mostramos el tip con más votos */}
        {hasVotes ? (
          <p className="votes-info">{mostValuedTip.text} (Votos: {mostValuedTip.votes})</p>
        ) : (
          <p className="no-votes">Todavía no hay votos.</p>
        )}
      </section>
    </div>
  )
}

// Exportamos la función App para que se use en main.jsx
export default App
