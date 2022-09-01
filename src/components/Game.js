import React from 'react'
import { useState, useRef} from 'react'
import './Game.css'

const Game = ({
    verifyLetter, 
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score}) => {

    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault();

        verifyLetter(letter);
        setLetter("")

        letterInputRef.current.focus();
    }

    return (
    <div className="game">
        <h1>Secret <span>Word</span></h1>
        <p className="points">
            <span>pontuação: {score}</span>
        </p>
        <h1 className="subtitle">Advinhe a palavra</h1>
        <p className="tip">Dica sobre a palavra: <span>{pickedCategory}</span></p>
        <p>Você ainda tem {guesses} tentativa(s)</p>
        <div className="wordContainer">
            {letters.map((letters, i) => (
                guessedLetters.includes(letters) ? (
                    <span key={i} className="letter">{letters}</span>
                ): (
                    <span key={i} className="blanksquare"></span>
                )
            ))}
        </div>

        <div className="letterContainer">
            <p>Tente advinhar uma letra da palavra</p>
            <form onSubmit={handleSubmit} >
                <input type="text" name="letter" maxLength="1" required onChange={
                    (e) => setLetter(e.target.value)
                }
                value={letter}
                ref={letterInputRef}
                />
                <button>jogar</button>
            </form>
        </div>
        

       

        
    </div>
  )
}

export default Game;