import React, { useState } from "react";
import { Row } from "./row";
import "./rock_paper_scissors.css";

const checkWinner = (playerMove: string, randomEnemyMove: string) => {
  if (
    (playerMove === "rock" && randomEnemyMove === "paper") ||
    (playerMove === "paper" && randomEnemyMove === "scissors") ||
    (playerMove === "scissors" && randomEnemyMove === "rock")
  ) {
    return "enemy";
  }
  if (
    (playerMove === "paper" && randomEnemyMove === "rock") ||
    (playerMove === "scissors" && randomEnemyMove === "paper") ||
    (playerMove === "rock" && randomEnemyMove === "scissors")
  ) {
    return "player";
  }
  return "draw";
};

const randomEnemyMove = () => {
  const options = ["rock", "paper", "scissors"];
  const randomOption = Math.floor(Math.random() * options.length);

  return options[randomOption];
};

export const RockPaperScissors: React.FC = () => {
  let [playerCount, setPlayerCount] = useState<number>(0);
  let [enemyCount, setEnemyCount] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [headerText, setHeaderText] = useState<string>("Choose your weapon!");

  const handleOnClick = (option: string) => {
    const enemyMove = randomEnemyMove();
    const result = checkWinner(option, enemyMove);

    if (result === "player") {
      setPlayerCount((prevPlayerCount) => {
        const newPlayerCount = prevPlayerCount + 1;
        if (newPlayerCount === 3) {
          setWinner(result);
        }
        return newPlayerCount;
      });
    } else if (result === "enemy") {
      setEnemyCount((prevEnemyCount) => {
        const newEnemyCount = prevEnemyCount + 1;
        if (newEnemyCount === 3) {
          setWinner(result);
        }
        return newEnemyCount;
      });
    }

    if (!winner) {
      setHeaderText(
        `Enemy chose ${enemyMove}. You chose ${option}. 
        It's a ${
          result === "draw" ? "draw!" : result === "player" ? "win!" : "loss!"
        }`
      );
    }
  };

  const resetGame = () => {
    setPlayerCount(0);
    setEnemyCount(0);
    setWinner(null);
    setHeaderText("Choose your weapon!");
  };

  return (
    <div className="rockPaperScissors">
      <div className="winScreen">
        <div className="showWinner">
          {winner ? winner + " won the game!" : ""}
        </div>

        <div className="resetGame">
          {winner ? <button onClick={resetGame}>Reset</button> : ""}
        </div>
      </div>

      <div className="enemyCount">
        {enemyCount >= 0 && enemyCount <= 4 && !winner
          ? "Enemy score: " + enemyCount
          : ""}
      </div>
      <Row handleClick={handleOnClick} headerText={headerText} />
      <div className="playerCount">
        {playerCount >= 0 && playerCount <= 4 && !winner
          ? "Player score: " + playerCount
          : ""}
      </div>
    </div>
  );
};
