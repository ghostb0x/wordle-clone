import React from 'react';

function GuessLimitInput({
  guessList,
  setGuessList,
  guessesAllowed,
  setGuessesAllowed,
}) {
  function updateGuessLimit(amount) {
    let newGuessList = [...guessList];

    if (amount > guessesAllowed) {
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
    } else {
      newGuessList.pop();
    }
    setGuessList(newGuessList);
    setGuessesAllowed(amount);
  }

  return (
    <form>
      <label htmlFor="guess">Change Current Guess Limit? </label>
      <input
        type="number"
        id="guess"
        name="guess"
        min="1"
        value={guessesAllowed}
        onChange={(event) => {
          updateGuessLimit(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default GuessLimitInput;
