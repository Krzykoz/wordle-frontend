import { useState } from "react";
import "./App.css";
import { Container } from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";

import { StatsModal } from "./components/modal/statsModal/StatsModal";
import { SettingsModal } from "./components/modal/settingsModal/SettingsModal";
import { RankingModal } from "./components/modal/rankingModal/RankingModal";
import { Keyboard } from "./components/keyboard/Keyboard";

function App() {
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [guessingWord, setGuessingWord] = useState("asdfg");
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  const onChar = (value: string) => {
    if (enteredWord.length < 5) {
      setEnteredWord((prevState) => `${prevState}${value}`);
    }
  };

  const onDelete = () => {
    console.log({ enteredWord });
    setEnteredWord((prevState) => prevState.slice(0, -1));
  };

  const onEnter = () => {
    if (enteredWord === guessingWord) {
      console.log("correct");
      setGameWon(true);
    } else {
      console.log("incorrect");
      setGameLost(true);
    }
    setEnteredWord("");
  };

  return (
    <Container>
      <Navbar
        setIsRankingModalOpen={setIsRankingModalOpen}
        setIsStatsModalOpen={setIsStatsModalOpen}
        setIsSettingsModalOpen={setIsSettingsModalOpen}
      />
      {isStatsModalOpen && <StatsModal closeModal={setIsStatsModalOpen} />}
      {isSettingsModalOpen && <SettingsModal closeModal={setIsSettingsModalOpen} />}
      {isRankingModalOpen && <RankingModal closeModal={setIsRankingModalOpen} />}
      <div className="game">
        <p>enteredWord: {enteredWord}</p>
        <Keyboard onEnter={onEnter} onChar={onChar} onDelete={onDelete} />
      </div>
    </Container>
  );
}

export default App;
