import React from "react";

interface Props {
  success: boolean;
  secretWord: string;
}

const Input: React.FC<Props> = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input" />;
  }
  return (
    <div data-test="component-input">
      <form data-test="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type={"text"}
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
