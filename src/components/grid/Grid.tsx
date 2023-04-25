import { CurrentRow } from "./subcomponents/currentRow/CurrentRow";
import { EmptyRow } from "./subcomponents/emptyRow/EmptyRow";
import { CompletedRow } from "./subcomponents/row/CompletedRow";

export const Grid = ({
  guesses,
  enteredWord,
  guessingWord,
}: {
  guesses: string[];
  enteredWord: string;
  guessingWord: string;
}) => {
  const empties =
    guesses.length < 4 ? Array.from(Array(4 - guesses.length)) : [];

  return (
    <div>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} solution={guessingWord} guess={guess} />
      ))}
      {guesses.length < 5 && <CurrentRow guess={enteredWord} />}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};
