import { ReactNode } from "react";
import "./key.css";

export const Key = ({
  value,
  onClick,
  children,
}: {
  value: string;
  onClick: (value: string) => void;
  children?: ReactNode;
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value);
    event.currentTarget.blur();
  };

  return (
    <button className="key" onClick={handleClick}>
      {children || value}
    </button>
  );
};
