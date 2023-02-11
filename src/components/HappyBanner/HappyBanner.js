import React from 'react';

function HappyBanner({ numGuesses, restartGame }) {
  let displayGuesses = numGuesses - 1;
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {displayGuesses} {displayGuesses > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
      <button onClick={() => restartGame()}>Restart Game</button>
    </div>
  );
}

export default HappyBanner;
