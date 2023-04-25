import { CharStatus } from "../../../../status";
import "./cell.css";
import classnames from "classnames";

type Props = {
  value?: string;
  status?: CharStatus;
  position?: number;
};

export const Cell = ({ value, status, position = 0 }: Props) => {
  const classes = classnames("cell", {
    "correct-letter": status === "correct",
    "present-letter": status === "present",
  });

  return (
    <div className={classes}>
      <div className="cell-letter">{value}</div>
    </div>
  );
};
