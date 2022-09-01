
import './App.css';

import {useCallback, useEffect, useState} from "react"

import { wordsList } from "./data/words"
import NavItems from './components/NavItems';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver'

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
];

function App() {
  const guessNumber = 5;
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState( wordsList );
  
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessNumber)
  const [score, setScore] = useState(0)

  

  const pickWordAndCategory = () =>{
      const categories = Object.keys(words)
      const category = categories[ Math.floor(Math.random()* Object.keys(categories).length)]
      

      const word = words[category][Math.floor(Math.random() * words[category].length)]
      

      return {word, category}
  }

  const startGame = useCallback(() =>  {
   clearLetterStages()
   const {word, category} = pickWordAndCategory();
   
   let wordLetters = word.split("")
   wordLetters = wordLetters.map((l) => l.toLowerCase()) 

   setPickedWord(word)
   setPickedCategory(category)
   setLetters(wordLetters)
   console.log(wordLetters)
    setGameStage(stages[1].name)
  })

  const verifyLetter = (letter) =>{
    const normalizedLatter = letter.toString().toLowerCase();

    if(guessedLetters.includes(normalizedLatter) || wrongLetters.includes(normalizedLatter)){
      return;
    }

    if(letters.includes(normalizedLatter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLatter
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLatter

        
      ]);
      setGuesses((actualgueses) => actualgueses - 1)
    }

    

    console.log(guessedLetters)
    console.log(wrongLetters)

  }

  const clearLetterStages = () =>{
    setGuessedLetters([])
    setWrongLetters([]);

  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStages();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    console.log(uniqueLetters)

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => (actualScore +=100))
      startGame();
    }

  }, [guessedLetters], letters, startGame)

  const retry = () => {
    setScore(0)
    setGuesses(guessNumber)
    setGameStage(stages[0].name)
    
  }

  return (
    <div className="App">
        <NavItems/>
       {gameStage === "start" && <StartScreen startGame={startGame}/>}
       {gameStage === "game" && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        />}
       {gameStage === "end" && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
