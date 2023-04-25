import { CharStatus, getStatuses } from "../../status";
import { Key } from "./subcomponents/Key";

export const Keyboard = ({
  onEnter,
  onDelete,
  onChar,
  solution,
  guesses,
}: {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  solution: string;
  guesses: string[];
}) => {
  const charStatuses = getStatuses(solution, guesses);

  const onClick = (value: string) => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "DELETE") {
      onDelete();
    } else {
      onChar(value);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
          />
        ))}
      </div>
      <div>
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
          />
        ))}
      </div>
      <div>
        <Key value="ENTER" onClick={onClick}>
          ENTER
        </Key>
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
          />
        ))}
        <Key value="DELETE" onClick={onClick}>
          DELETE
        </Key>
      </div>
    </div>
  );
};
