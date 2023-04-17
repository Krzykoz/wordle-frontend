import React from "react";
import "../Modal.css"

export const RankingModal = ({
  closeModal,
}: {
  closeModal: (value: boolean) => void;
}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Ranking</h1>
        </div>
        <div className="body">
          <p>Tu będzie można sprawdzić ranking</p>
        </div>
        <div className="footer">
          <button id="closeBtn" onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};