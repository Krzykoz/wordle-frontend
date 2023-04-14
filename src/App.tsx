import { useState } from "react";
import "./App.css";
import { Container } from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";
import { StatsModal } from "./components/modal/statsModal/StatsModal";
import { SettingsModal } from "./components/modal/settingsModal/SettingsModal";
import { RankingModal } from "./components/modal/rankingModal/RankingModal";

function App() {
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
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
    </Container>
  );
}

export default App;
