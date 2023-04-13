import { useState } from "react";
import "./App.css";
import { Container } from "./components/container/Container";
import { Navbar } from "./components/navbar/Navbar";
import { ModalStats } from "./components/modal/ModalStats";

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
      <ModalStats />
    </Container>
  );
}

export default App;
