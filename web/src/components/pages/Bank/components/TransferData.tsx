import React from "react";
import Avatar from "react-avatar";

type DataProps = {
  name?: string;
  code?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const TransferData = ({ name, code, onClick }: DataProps) => {
  return (
    <div
      className="p-3 h-[15%] flex justify-between items-center gap-4"
      onClick={onClick}
    >
      <div className=" rounded-full w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 flex items-center justify-center ">
        {/* <span className="uppercase text-sm text-white">{letter}</span> */}
        <Avatar name={name} round size="40" color="transparent" />
      </div>
      <div className="flex flex-col gap-1 flex-1 w-full">
        <span className="font-semibold">{name}</span>
        <span className="text-xs text-[#aaa]">{code}</span>
      </div>
    </div>
  );
};

export default TransferData;
