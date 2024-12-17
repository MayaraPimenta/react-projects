import './Main.css'
import Die from './Die/Die'
import { nanoid } from 'nanoid';
import { useState } from 'react';
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti';

export default function Main() {
  const [dice, setDice] = useState(() => generateAllNewDice()); // Usando () => a função só será chamada na primeira vez
  const { width, height } = useWindowSize();
  
  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10)
    .fill(0)
    .map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }));
  };

  function hold(id) {
    setDice(prev => {
      return prev.map(die => {
        return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
      })
    })
  };

  const dices = dice.map((die) =>
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      hold={() => hold(die.id)}
    />
  );

  function rollDices() {
    gameWon ?
    generateAllNewDice()
    :
    setDice(prev => (
      prev.map(die => {
        return die.isHeld ?
        die :
        {
          ...die,
          value: Math.ceil(Math.random() * 6),
        }
      })
    ));
  }

  return (
    <div className="main">
      <header className="main__header">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </header>

      <main className="main__dices">{dices}</main>

      <button className="main__btn" onClick={rollDices}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>

      {gameWon && 
        <Confetti
          width={width}
          height={height}
        />
      } 
    </div>
  );
}