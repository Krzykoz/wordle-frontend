import { useState } from "react";
import "./App.css";
import { Container } from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";

import { StatsModal } from "./components/modal/statsModal/StatsModal";
import { SettingsModal } from "./components/modal/settingsModal/SettingsModal";
import { RankingModal } from "./components/modal/rankingModal/RankingModal";
import { Keyboard } from "./components/keyboard/Keyboard";
import { Grid } from "./components/grid/Grid";

function App() {
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [enteredWord, setEnteredWord] = useState("");
  const [guessingWord, setGuessingWord] = useState("DEBIL");
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [guesses, setGuesses] = useState<string[]>([]);

  const onChar = (value: string) => {
    if (gameWon || gameLost) {
      return;
    }
    if (enteredWord.length < 5) {
      setEnteredWord((prevState) => `${prevState}${value}`);
    }
  };

  const onDelete = () => {
    setEnteredWord((prevState) => prevState.slice(0, -1));
  };

  const onEnter = () => {
    if (enteredWord.length !== 5) {
      return;
    }
    if (enteredWord === guessingWord) {
      setGuesses((current) => [...current, enteredWord]);
      setGameWon(true);
    } else {
      setGuesses((current) => [...current, enteredWord]);
      if (guesses.length === 4) {
        setGameLost(true);
      }
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
      {isSettingsModalOpen && (
        <SettingsModal closeModal={setIsSettingsModalOpen} />
      )}
      {isRankingModalOpen && (
        <RankingModal closeModal={setIsRankingModalOpen} />
      )}
      <div className="game">
        <Grid
          guesses={guesses}
          enteredWord={enteredWord}
          guessingWord={guessingWord}
        />
        <Keyboard
          onEnter={onEnter}
          onChar={onChar}
          onDelete={onDelete}
          solution={guessingWord}
          guesses={guesses}
        />
      </div>
    </Container>
  );
}

export default App;
