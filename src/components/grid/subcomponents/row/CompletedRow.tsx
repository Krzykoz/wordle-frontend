import { getGuessStatuses } from "../../../../status";
import { Cell } from "../cell/Cell";
import "./completedRow.css";

type Props = {
  solution: string;
  guess: string;
};

export const CompletedRow = ({ solution, guess }: Props) => {
  const statuses = getGuessStatuses(solution, guess);
  const splitGuess = Array.from(guess);

  return (
    <div className="completed-row">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} position={i} />
      ))}
    </div>
  );
};
