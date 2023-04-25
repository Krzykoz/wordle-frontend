import classNames from "classnames";
import { ReactNode } from "react";
import "./key.css";

export const Key = ({
  value,
  onClick,
  status,
  children,
}: {
  value: string;
  onClick: (value: string) => void;
  status?: string;
  children?: ReactNode;
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value);
    event.currentTarget.blur();
  };

  const classes = classNames("key", {
    "correct-letter": status === "correct",
    "present-letter": status === "present",
    "absent-letter": status === "absent",
  });

  return (
    <button className={classes} onClick={handleClick}>
      {children || value}
    </button>
  );
};
