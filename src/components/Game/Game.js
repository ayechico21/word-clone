import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputGuess from "../InputGuess";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  const addGuess = (guess) => {
    const newGuess = { id: crypto.randomUUID(), guess: guess };
    setGuessList((currentGuesses) => {
      return [...currentGuesses, newGuess];
    });
  };

  return (
    <>
      <GuessList guessList={guessList} />
      <InputGuess addGuess={addGuess} />
    </>
  );
}

export default Game;
