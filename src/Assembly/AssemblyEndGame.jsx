import "./Main.scss";
import Header from "./Header/Header";
import Status from "./Status/Status";
import Chip from "./Chips/Chip";
import Letter from "./Letter/Letter";
import Key from "./Key/Key";
import { languages } from "./utils/Languages";
import { useState } from "react";
import clsx from "clsx";
import { getRandomWord } from "./utils/Index";
import { nanoid } from 'nanoid';

function App() {
  //state values
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [guessedLetter, setGuessedLetter] = useState([]);

  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //derived values
  const wrongGuessesCount = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetter.includes(letter));
  const isGameLost = wrongGuessesCount >= languages.length;
  const isGameOver = isGameWon || isGameLost;

  const chipsList = languages.map((lang, index) => {
    const isChipLost = index < wrongGuessesCount;
    const className = clsx({
      black: isChipLost,
    });

    return <Chip key={lang.id} className={className} />;
  });

  const word = currentWord
    .split("")
    .map((letter) => (
      <Letter
        key={nanoid()}
        value={guessedLetter.includes(letter) ? letter.toUpperCase() : ""}
      />
    ));
 
  function getLetter(letter) {
    setGuessedLetter((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  function startNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetter([])
  }

  const keyboardContent = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetter.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <Key
        className={className}
        key={letter}
        value={letter.toUpperCase()}
        getLetter={() => getLetter(letter)}
      />
    );
  });

  const statusData = isGameWon
    ? {
        title: "You Win!",
        text: "Well done! 🎉",
        backgroundColor: "#10A95B",
      }
    : isGameLost
    ? {
        title: "You Lost!",
        text: "Better Luck next time!",
        backgroundColor: "#EC5D49",
      }
    : null;

  return (
    <>
      <main className="main">
        <Header />
        {isGameOver && <Status {...statusData} />}
        <section className="main__chips">{chipsList}</section>
        <section className="main__letters">{word}</section>
        <section className="main__keyboard">{keyboardContent}</section>
        {isGameOver && <button className="main__btn" onClick={startNewGame}> New Game </button>}
      </main>
    </>
  );
}

export default App;
