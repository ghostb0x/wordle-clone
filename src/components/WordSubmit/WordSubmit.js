import { check } from 'prettier';
import React from 'react';
import { checkGuess } from '../../game-helpers';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function WordSubmit({
  guessList,
  setGuessList,
  answer,
  setAnswer,
  startRenders,
  guessesAllowed,
}) {
  const [guess, setGuess] = React.useState('');
  const [guessNum, setGuessNum] = React.useState(1);
  const [playing, setPlaying] = React.useState(true);
  const [won, setWon] = React.useState(false);

  function restartGame() {
    setGuessList(startRenders);
    setWon(false);
    setPlaying(true);
    setAnswer(sample(WORDS));
    setGuessNum(1);
  }

  function addGuess(guess) {
    let newGuessList = [...guessList];

    if (guess === answer) {
      setPlaying(false);
      setWon(true);
    } else if (guessNum >= guessesAllowed) {
      setPlaying(false);
      setWon(false);
    }

    //convert guess to array of objects
    //with status attribute

    let newGuessValue = checkGuess(guess, answer);

    let newGuessObj = {
      id: crypto.randomUUID(),
      value: newGuessValue,
      guessNum: guessNum,
    };

    if (guessNum <= guessesAllowed) {
      newGuessList[guessNum - 1] = newGuessObj;
    } else {
      newGuessList.shift();
      newGuessList.push(newGuessObj);
    }

    setGuessList(newGuessList);
  }

  function submitGuess(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('Please enter a 5 letter word');
      return;
    }

    setGuessNum(guessNum + 1);
    addGuess(guess);
    setGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        submitGuess(event);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>

      {playing ? (
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            let newGuess = event.target.value;
            newGuess = newGuess.toUpperCase();
            setGuess(newGuess);
          }}
        />
      ) : won ? (
        <>
          <HappyBanner
            numGuesses={guessNum}
            restartGame={restartGame}
          />
        </>
      ) : (
        <>
          <SadBanner
            answer={answer}
            restartGame={restartGame}
          />
        </>
      )}
    </form>
  );
}

export default WordSubmit;
