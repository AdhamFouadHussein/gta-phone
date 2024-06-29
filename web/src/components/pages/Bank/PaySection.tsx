import close from "../../assets/images/Bank/Close.png";
import cash from "../../assets/images/Bank/cash.png";
import debit from "../../assets/images/Bank/debit.png";
import confirmIcon from "../../assets/images/Bank/Icon.png";
import Payment from "./components/Payment";
import { useState } from "react";

type Props = {
  pay: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  closeClick?: React.MouseEventHandler<HTMLImageElement>;
  inputValue: string;
};

const PaySection = ({ pay, onClick, closeClick, inputValue }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // const handle

  return (
    <div
      className={`text-white absolute z-30 top-0 left-0 rounded-[35px] w-full h-full flex flex-col justify-between items-center bg-black`}
      style={{ display: pay ? "block" : "none" }}
    >
      <div className="w-full h-[45%] relative" onClick={onClick}>
        <div
          className="cursor-pointer absolute h-[80px] flex justify-center items-end flex-col -right-1 bottom-12 pr-2 border-r-4 border-white"
          //   onCLick={onCLick}
          onClick={onClick}
        >
          <span className="block">Double Click</span>
          <span>to Pay</span>
          {/* <div className="w-[5px] h-"></div> */}
        </div>
      </div>
      <div className="w-full h-[55%] p-2 bg-[#28282A] rounded-b-[35px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center pb-4">
          <span className="text-xl">Pay</span>
          <img
            src={close}
            alt=""
            onClick={closeClick}
            className="cursor-pointer"
          />
        </div>

        {/* Body section */}

        <div>
          <div className="mb-1">
            <div onClick={() => setPaymentMethod("cash")}>
              <Payment
                img={cash}
                payMethod={"Cash"}
                body={"Cash Available"}
                amount={137}
                isActive={paymentMethod === "cash" ? true : false}
              />
            </div>
            <div onClick={() => setPaymentMethod("debit")}>
              <Payment
                img={debit}
                payMethod={"Debit Card"}
                body={"Bank funds Available"}
                amount={13734}
                isActive={paymentMethod === "debit" ? true : false}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#aaa]">
            Transfer to <span className="font-bold">Angelina Hubbard</span>
          </p>
          <span className="text-lg font-bold">${inputValue}</span>
        </div>
        <div className="pb-2 pt-2 flex justify-center items-center flex-col">
          <img src={confirmIcon} alt="" width={30} />
          <span className="text-sm">Confirm with Side Button</span>
        </div>
      </div>
    </div>
  );
};

export default PaySection;
