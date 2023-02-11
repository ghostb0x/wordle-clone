import React from 'react';

function SadBanner({ answer, restartGame }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={() => restartGame()}>Restart Game</button>
    </div>
  );
}

export default SadBanner;
