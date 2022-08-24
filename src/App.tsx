import React, { useEffect } from "react";
import "./App.css";
import { getSecretWord } from "./actions/getSecretWord";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

function App() {
  const success = false;
  const secretWord = "party";
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
