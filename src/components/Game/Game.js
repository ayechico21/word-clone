import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  /* win ||  lose || active */
  const [gameStatus, setGameStatus] = useState("active");

  const addGuess = (guess) => {
    setGuessList((currentGuesses) => {
      return [...currentGuesses, guess];
    });
    // current input guess
    if (guess === answer) setGameStatus("won");
    // last guess was also not correct
    else if (guessList.length >= 5) setGameStatus("lose");
  };

  return (
    <>
      <GuessResults guessList={guessList} />
      {gameStatus === "won" && <HappyBanner numOfGuesses={guessList.length} />}
      {gameStatus === "lose" && <SadBanner answer={answer} />}
      <InputGuess addGuess={addGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
