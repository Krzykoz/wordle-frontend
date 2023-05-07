import { useEffect, useState } from 'react';
import './App.css';
import { Container } from './components/container/Container';
import { Navbar } from './components/navbar/Navbar';

import { StatsModal } from './components/modal/statsModal/StatsModal';
import { SettingsModal } from './components/modal/settingsModal/SettingsModal';
import { RankingModal } from './components/modal/rankingModal/RankingModal';
import { WonModal } from './components/modal/wonModal/wonModal';
import { LostModal } from './components/modal/lostModal/lostModal';
import { Keyboard } from './components/keyboard/Keyboard';
import { Grid } from './components/grid/Grid';

function App() {
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [enteredWord, setEnteredWord] = useState('');
  const [guessingWord, setGuessingWord] = useState('');
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [userToken, setUserToken] = useState<string | null>(null);

  const fetchWord = async () => {
    const response = await fetch(
      'http://localhost:8080/api/v1/word/random?languageCode=PL'
    );
    const data = await response.json();
    setGuessingWord(data.word.toUpperCase());
  };

  const checkIfUserInfoExists = () => {
    const localStorageUserToken = localStorage.getItem('userToken');
    if (localStorageUserToken) {
      setUserToken(localStorageUserToken);
    }
  };

  useEffect(() => {
    fetchWord();
    checkIfUserInfoExists();
  }, []);

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

  const onEnter = async () => {
    if (enteredWord.length !== 5) {
      return;
    }
    if (enteredWord === guessingWord) {
      setGuesses((current) => [...current, enteredWord]);

      const response = await fetch('http://localhost:8080/api/v1/game', {
        method: 'POST',
        body: JSON.stringify({
          turns: roundNumber + 1,
          guessed: true,
          word: guessingWord.toLowerCase(),
          languageCode: 'PL',
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (!response.ok) {
        console.log('Something went wrong!');
      }
      setGameWon(true);
    } else {
      setGuesses((current) => [...current, enteredWord]);
      if (guesses.length === 4) {
        const response = await fetch('http://localhost:8080/api/v1/game', {
          method: 'POST',
          body: JSON.stringify({
            turns: roundNumber + 1,
            guessed: false,
            word: guessingWord.toLowerCase(),
            languageCode: 'PL',
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
        });
        if (!response.ok) {
          console.log('Something went wrong!');
        }
        setGameLost(true);
      }
    }
    setEnteredWord('');
    setRoundNumber((prevState) => prevState + 1);
  };

  const playAgainHandler = () => {
    setGameWon(false);
    setGameLost(false);
    setGuesses([]);
    setRoundNumber(0);
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
        <SettingsModal
          closeModal={setIsSettingsModalOpen}
          userToken={userToken}
          setUserToken={setUserToken}
        />
      )}
      {isRankingModalOpen && (
        <RankingModal closeModal={setIsRankingModalOpen} />
      )}
      {gameWon && (
        <WonModal
          closeModal={setGameWon}
          playAgain={playAgainHandler}
          roundNumber={roundNumber}
        />
      )}
      {gameLost && (
        <LostModal
          closeModal={setGameLost}
          playAgain={playAgainHandler}
          word={guessingWord}
        />
      )}
      <div className='game'>
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
