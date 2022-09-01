import React from 'react'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Obrigado por Jogar!</h1>
        <h2>
          A sua pontuação foi: <span>{score}</span>
        </h2>
        <button onClick={retry}>Tente Novamente</button>
    </div>
  )
}

export default GameOver