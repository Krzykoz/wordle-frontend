import { Cell } from "../cell/Cell";
import "./row.css";

type Props = {
  guess: string;
  className?: string;
};

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = Array.from(guess);
  const emptyCells = Array.from(Array(5 - splitGuess.length));

  return (
    <div className="row">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
