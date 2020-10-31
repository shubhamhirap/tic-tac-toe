import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CheckWinner } from "../CheckWinner";
import Box from "./Box";

const Game = (props) => {
  let choice = props.location.state;
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CheckWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = choice.sideValue === 'o' ? xIsNext ? "O" : "X" : xIsNext ? "X" : "O" ;
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
    console.log(choice);
  };

  return (
    <div className="gameStyle">
      {choice.choice === "withFriend" ? (
        <div className="mb-3">
          <span className="mr-1">Me</span>
          <span>0 - 0</span>
          <span className="ml-1">Friend</span>
        </div>
      ) : (
        <>
          <span>Me</span>
          <span>Bot</span>
        </>
      )}
      <Box squares={history[stepNumber]} onClick={handleClick} />
      {winner ? "Winner : " + winner : null}
      {winner || stepNumber === 9 ? (
        <div>
          <Link to="/">
            <Button
              className="mt-3"
              variant="contained"
              color="primary"
              style={{ borderRadius: 25 }}
            >
              Play Again
            </Button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
