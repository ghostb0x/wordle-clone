import React from 'react';
import { range } from '../../utils';

function GuessLimitInput({
  guessList,
  setGuessList,
  guessesAllowed,
  setGuessesAllowed,
  guessNum,
}) {
  function updateGuessLimit(amount) {
    let newGuessList = [...guessList];

    if (!amount) {
      let newGuessesAllowed = guessesAllowed;
      setGuessesAllowed(newGuessesAllowed);
    } else if (amount > guessesAllowed) {
      range(amount - guessesAllowed).map(() => {
        let newRenderObj = {
          id: crypto.randomUUID(),
          value: [
            { letter: '', status: '' },
            { letter: '', status: '' },
            { letter: '', status: '' },
            { letter: '', status: '' },
            { letter: '', status: '' },
          ],
        };
        newGuessList.push(newRenderObj);
      });
    } else {
      range(guessesAllowed - amount).map(() => {
        newGuessList.pop();
      });
    }
    setGuessList(newGuessList);
    setGuessesAllowed(amount);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <p>
        guesses allowed {''} {guessesAllowed}
      </p>
      <label htmlFor="guess">Change Current Guess Limit? </label>
      <input
        type="number"
        id="guess"
        name="guess"
        min={guessNum > 1 ? guessNum : 1}
        value={guessesAllowed}
        onChange={(event) => {
          updateGuessLimit(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default GuessLimitInput;
