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
      };
      
    setGuessList(newGuessList);
    setGuessesAllowed(amount);
  }

  return (
    <>
      <h3>Change Current Guess Limit </h3>
      <div className="ctrl">
        <button
          className="ctrl__button ctrl__button--decrement"
          onClick={(event) => {
            guessesAllowed > guessNum
              ? updateGuessLimit(guessesAllowed - 1)
              : window.alert(
                  'Cannot go below current guess number: ' + guessNum
                );
          }}
        >
          &ndash;
        </button>
        <div className="ctrl__counter">
          <div className="ctrl__counter-num">{guessesAllowed}</div>
        </div>
        <button
          className="ctrl__button ctrl__button--increment"
          onClick={(event) => {
            updateGuessLimit(guessesAllowed + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default GuessLimitInput;
