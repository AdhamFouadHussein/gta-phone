import React from "react";

type Props = {
  color: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  height: string;
};

const ActionBtn = ({ color, title, onClick, height }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black/80  w-full ${height} rounded-xl ${color} font-bold text-xl`}
    >
      {title}
    </button>
  );
};

export default ActionBtn;
