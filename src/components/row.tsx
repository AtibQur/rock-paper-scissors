import React from "react";
import "./rock_paper_scissors.css";
import rock from "../pictures/rock.jpg";
import paper from "../pictures/paper.jpg";
import scissors from "../pictures/scissors.jpg";

type rowProp = {
  handleClick: (option: string) => void;
  headerText: string;
};

export const Row: React.FC<rowProp> = ({ handleClick, headerText }) => {
  const handleOptionClick = (option: string) => {
    handleClick(option);
  };
  return (
    <div className="gameContainer">
      <div className="options">
        <img className="optionButton" src={rock} alt="rock" />
        <img className="optionButton" src={paper} alt="paper" />
        <img className="optionButton" src={scissors} alt="scissors" />
      </div>

      <h1>{headerText}</h1>

      <div className="options">
        <img
          className="optionButton optionButtonPlayer"
          id="rock"
          src={rock}
          alt="rock"
          onClick={() => handleOptionClick("rock")}
        />
        <img
          className="optionButton optionButtonPlayer"
          id="paper"
          src={paper}
          alt="paper"
          onClick={() => handleOptionClick("paper")}
        />
        <img
          className="optionButton optionButtonPlayer"
          id="scissors"
          src={scissors}
          alt="scissors"
          onClick={() => handleOptionClick("scissors")}
        />
      </div>
    </div>
  );
};
