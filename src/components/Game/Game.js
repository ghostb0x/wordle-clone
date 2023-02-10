import React from 'react';
import { range } from '../../utils';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WordSubmit from '../WordSubmit/WordSubmit';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const startRenders = [];
  // start with empty guess grid
  for (let i in range(NUM_OF_GUESSES_ALLOWED)) {
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
      <GuessList guessList={guessList} />
      <WordSubmit
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
      />
    </>
  );
}

export default Game;
