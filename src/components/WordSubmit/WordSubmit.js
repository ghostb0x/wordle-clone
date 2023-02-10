import { check } from 'prettier';
import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function WordSubmit({ guessList, setGuessList, answer }) {
  const [guess, setGuess] = React.useState('');
  const [guessNum, setGuessNum] = React.useState(1);

  function addGuess(guess) {
    let newGuessList = [...guessList];

    //convert guess to array of objects
    //with status attribute

    let newGuessValue = checkGuess(guess, answer);

    let newGuessObj = {
      id: crypto.randomUUID(),
      value: newGuessValue,
      guessNum: guessNum,
    };

    if (guessNum <= NUM_OF_GUESSES_ALLOWED) {
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
      current: {guess}
    </form>
  );
}

export default WordSubmit;
