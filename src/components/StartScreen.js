import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret <span>Word</span></h1>
        <p>Clique no Botão abaixo para começar a jogar<i class="uil uil-arrow-down"></i></p>
        
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen