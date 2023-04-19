import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((_, index) => (
        <Guess key={index} guess={guessList[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
