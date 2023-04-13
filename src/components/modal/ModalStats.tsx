import React from "react";

export const ModalStats = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button> X </button>
        <div className="title">
          <h1>Your Statistics</h1>
        </div>
        <div className="body">
          <p>Tu będzie potrzebna logika do pobierania statystyk gracza</p>
        </div>
        <div className="footer">
          <button>Close</button>
        </div>
      </div>
    </div>
  )
} 