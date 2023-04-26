import React from "react";
import "../Modal.css";

export const WonModal = ({
  closeModal,
  playAgain,
  roundNumber,
}: {
  closeModal: (value: boolean) => void;
  playAgain: (value: boolean) => void;
  roundNumber: number;
}) => {
  let round = "rounds";
  if (roundNumber === 1) {
    round = "round";
  }
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Your Won!</h1>
        </div>
        <div className="body">
          <p>It took you {roundNumber} {round}</p>
        </div>
        <div className="footer">
          <button id="closeBtn" onClick={() => closeModal(false)}>
            Close
          </button>
          <button id="playAgainBtn" onClick={() => playAgain(true)}>Play Again</button>
        </div>
      </div>
    </div>
  );
};
