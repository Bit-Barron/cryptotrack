import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  type = "button",
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="mt-1 w-40 rounded-lg bg-primary p-2.5 font-semibold hover:bg-primary"
    >
      {text}
    </button>
  );
};
