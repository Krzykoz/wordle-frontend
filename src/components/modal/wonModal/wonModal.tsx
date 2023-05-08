import React, { useEffect } from 'react';
import '../Modal.css';

type StatisticsResponse = {
  wordStatistics: {
    wordWinRatio: number;
    averageTurnsInWonGames: number;
    averageTurnsInAllGames: number;
  };
  userStatistics: {
    numberOfWins: number;
    winsRatio: number;
  } | null;
};

export const WonModal = ({
  closeModal,
  playAgain,
  roundNumber,
  guessingWord,
  userToken,
}: {
  closeModal: (value: boolean) => void;
  playAgain: (value: boolean) => void;
  roundNumber: number;
  guessingWord: string;
  userToken: string | null;
}) => {
  let round = 'rounds';
  if (roundNumber === 1) {
    round = 'round';
  }
  const [wordStatistics, setWordStatistics] =
    React.useState<StatisticsResponse | null>(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      const authHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      };

      const headers = {
        'Content-Type': 'application/json',
      };
      const response = await fetch(
        `http://localhost:8080/api/v1/statistics?word=${guessingWord.toLowerCase()}&languageCode=PL`,
        {
          headers: {
            ...(userToken ? authHeaders : headers),
          },
        }
      );
      const data: StatisticsResponse = await response.json();
      console.log(data);
      setWordStatistics(data);
    };
    fetchStatistics();
  }, []);

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='title'>
          <h1>Your Won!</h1>
        </div>
        <div className='body'>
          <p>
            It took you {roundNumber} {round}
          </p>
        </div>
        <div>
          <p>Word statistics:</p>
          <p>
            Word win ratio:{' '}
            {wordStatistics && wordStatistics.wordStatistics?.wordWinRatio}
          </p>
          <p>
            Average Turns In Won Games:{' '}
            {wordStatistics &&
              wordStatistics.wordStatistics?.averageTurnsInWonGames}
          </p>
          <p>
            Average Turns In All Games:{' '}
            {wordStatistics &&
              wordStatistics.wordStatistics?.averageTurnsInAllGames}
          </p>
        </div>
        {userToken && (
          <div>
            <p>User statistics:</p>
            <p>
              Number Of Wins:{' '}
              {wordStatistics && wordStatistics.userStatistics?.numberOfWins}
            </p>
            <p>
              Wins Ratio:{' '}
              {wordStatistics && wordStatistics.userStatistics?.winsRatio}
            </p>
          </div>
        )}
        <div className='footer'>
          <button id='playAgainBtn' onClick={() => playAgain(true)}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};
