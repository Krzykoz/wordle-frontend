import "./emptyRow.css";
import { Cell } from "../cell/Cell";

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(5));

  return (
    <div className="empty-row">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};
