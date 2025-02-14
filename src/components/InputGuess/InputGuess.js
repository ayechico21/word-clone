import React, { useState } from "react";

function InputGuess({ addGuess, gameStatus }) {
  const [guess, setGuess] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label className="guess-input" htmlFor="guess-input">
        Enter Guess:
      </label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== "active"}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        title="Enter 5 character word"
      ></input>
    </form>
  );
}

export default InputGuess;
