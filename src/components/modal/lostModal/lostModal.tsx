import React from "react";
import "./lostModal.css"

export const LostModal = ({
  closeModal,
  word,
}: {
  closeModal: (value: boolean) => void;
  word: string;
}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>You lose</h1>
        </div>
        <div className="body">
          <p>The word to guess was: {word}</p>
          <p>You can try again tommorow</p>
          <h3>Good Luck!!!</h3>
        </div>
        <div className="footer">
          <button id="closeBtn" onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};
