import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { answer } from "../Game/Game";

function Guess({ guess }) {
  if (!guess)
    return (
      <p className="guess">
        {range(5).map((_, index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );

  const guessStatus = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((_, index) => {
        const letter = guessStatus[index].letter;
        const status = guessStatus[index].status;
        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
