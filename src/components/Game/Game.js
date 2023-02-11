import React from 'react';
import { range } from '../../utils';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WordSubmit from '../WordSubmit/WordSubmit';
import GuessList from '../GuessList/GuessList';
import GuessLimitInput from '../GuessLimitInput/GuessLimitInput';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info({ answer });

  const [guessesAllowed, setGuessesAllowed] = React.useState(
    NUM_OF_GUESSES_ALLOWED
  );

  const startRenders = [];
  // start with empty guess grid
  for (let i in range(guessesAllowed)) {
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
    startRenders.push(newRenderObj);
  }

  const [guessList, setGuessList] = React.useState(startRenders);

  return (
    <>
      <GuessLimitInput
        guessList={guessList}
        setGuessList={setGuessList}
        guessesAllowed={guessesAllowed}
        setGuessesAllowed={setGuessesAllowed}
      />
      <GuessList guessList={guessList} />
      <WordSubmit
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        setAnswer={setAnswer}
        startRenders={startRenders}
        guessesAllowed={guessesAllowed}
      />
    </>
  );
}

export default Game;
