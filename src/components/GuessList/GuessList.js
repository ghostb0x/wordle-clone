import React from 'react';
import { range } from '../../utils';

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({ id, value }) => (
        <p
          className="guess"
          key={id}
        >
          {range(5).map((index) => (
            <span
              className={`cell ` + `${value[index]['status']}`}
              key={id + index}
            >
              {value[index]['letter']}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
