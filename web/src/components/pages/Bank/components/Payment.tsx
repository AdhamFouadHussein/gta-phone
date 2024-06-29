import React from "react";
import smClose from "../../../assets/images/Bank/smallClose.png";

type Props = {
  img: string;
  payMethod: string;
  body: string;
  amount: number;
  isActive: boolean;
};

const Payment = ({ img, payMethod, body, amount, isActive }: Props) => {
  return (
    <div
      className={`h-[70px] flex justify-center items-start gap-2 pl-2 py-2 rounded-lg mb-2`}
      style={{ backgroundColor: isActive ? "#3b3b3b" : "#303030" }}
    >
      <img src={img} alt="" />
      <div className="flex-1 h-full flex justify-between items-start flex-col w-full">
        <div className="flex justify-between items-center w-full pb-2 border-neutral-600 border-b-[0.5px]">
          <div className="text-sm   w-full ">{payMethod}</div>
          {isActive && <img src={smClose} alt="" className="pr-2" />}
        </div>
        <div className="text-xs flex gap-2 text-[#aaa]">
          <span>{body}</span>
          <span className="bg-black px-[2px] rounded-md">${amount}</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
