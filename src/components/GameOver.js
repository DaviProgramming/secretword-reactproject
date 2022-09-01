import React from 'react'
import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div className="endgame">
        <h1>Obrigado por Jogar!</h1>
        <h2>
          A sua pontuação foi: <span>{score}</span>
        </h2>
        <button onClick={retry}>Tente Novamente</button>
    </div>
  )
}

export default GameOver