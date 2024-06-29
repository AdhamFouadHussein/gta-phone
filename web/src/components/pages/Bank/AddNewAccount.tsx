import React, { useEffect, useState } from "react";
import ActionBtn from "./components/ActionBtn";
import dollar from "../../assets/images/Bank/dollar-24.png";
import paymentsuccess from "../../assets/images/Bank/paymentsuccess.png";
import PaySection from "./PaySection";

type Props = {
  open: boolean;
  secOpen: boolean;
  overlay: boolean;
  amount: boolean;
  setOpen: (value: boolean) => void;
  setoverLay: (value: boolean) => void;
  setContacts: (value: boolean) => void;
  setAmount: (value: boolean) => void;
  handleSecOpen: React.MouseEventHandler<HTMLParagraphElement>;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
};

const AddNewAccount = ({
  open,
  secOpen,
  overlay,
  handleSecOpen,
  handleClose,
  setOpen,
  setoverLay,
  setContacts,
  amount,
  setAmount,
}: Props) => {
  const [pay, setPay] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>();
  const [inputValue, setInputValue] = useState<string>("0");

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const handleSuccess = () => {
    setPaySuccess(true);
    setPay(false);
    timer.current = setTimeout(() => {
      setPaySuccess(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleShowContacts = () => {
    setContacts(true);
    setOpen(false);
    setoverLay(false);
  };

  const handleAmountConfirm = () => {
    setAmount(false);
    setoverLay(false);
    setPay(true);
  };

  return (
    <div>
      <div>
        <div
          className={`absolute bottom-0 z-30  left-0 h-full w-full bg-black/50 rounded-[35px]`}
          style={{ display: overlay ? "block" : "none" }}
        ></div>
        <div
          className={`absolute 
          ${open ? "h-[40%] z-30" : "h-[0%] opacity-0 z-0"} 
            p-[8px] w-full  bottom-14 gap-2 flex justify-between items-center flex-col`}
          style={{
            transition: "1s",
          }}
        >
          <div className="bg-black/70 text-center h-[75%] rounded-xl flex justify-center items-center flex-col">
            <p className="text-[#aaa] h-[27%] text-[11px] w-full border-b-[1px] border-white/15 mx-auto px-2 pt-4">
              How would you like to add a new transfer contact?
            </p>
            <p
              onClick={handleShowContacts}
              className="w-full cursor-pointer border-b-[1px] text-blue-500 text-[15px] border-white/15 h-[35%] flex justify-center items-center"
            >
              Add via contacts
            </p>
            <p
              onClick={handleSecOpen}
              className="w-full cursor-pointer h-[45%] text-blue-500 text-[18px] flex justify-center items-center"
            >
              Add new account or phone number
            </p>
          </div>
          <ActionBtn
            color="text-red-600"
            title={"Cancel"}
            onClick={handleClose}
            height="h-[21%]"
          />
        </div>
      </div>
      {/* add new account or phone//////////////////////////////////////////////////////////////*/}
      <div
        className={`absolute 
          ${secOpen ? "h-[30%] z-30" : "h-[0%] opacity-0  z-0"} 
            p-[8px] w-full none bottom-16   flex justify-between items-center flex-col`}
        style={{ transition: "1s", display: `${secOpen && "block"}` }}
      >
        <div className="bg-black/70 w-full text-center h-[65%] mb-3 rounded-xl flex justify-center items-center flex-col">
          <p className="text-[#aaa] h-[30%] text-[12px] w-full border-b-[1px] border-white/15 mx-auto px-2 pt-2">
            Please enter the account or phone number:
          </p>
          <div className="w-full cursor-pointer text-blue-500 text-[20px] border-white/15 h-[70%] flex justify-center items-center">
            <input
              type="text"
              placeholder="AW BANK UNI 234-43268-000"
              onKeyDown={(e) => handleInputKeyDown(e)}
              className="pb-3 text-white pt-1 px-2 rounded-xl bg-black/15 border-[1px] border-black placeholder:text-sm placeholder:text-white focus-within:outline-none focus-within:border-none"
            />
          </div>
        </div>
        <ActionBtn
          color="text-blue-500"
          title={"Confirm"}
          onClick={handleClose}
          height="h-[30%]"
        />
      </div>
      {/* Add Amount ///////////////////////////////////////////////////////////*/}
      <div
        className={`absolute 
          ${amount ? "h-[30%] z-30" : "h-[0%] opacity-0  z-0"} 
            p-[8px] w-full none bottom-16   flex justify-between items-center flex-col`}
        style={{ transition: "1s", display: `${amount && "block"}` }}
      >
        <div className="bg-black/70 w-full text-center h-[65%] mb-3 rounded-xl flex justify-center items-center flex-col">
          <p className="text-[#aaa] h-[30%] text-[12px] w-full border-b-[1px] border-white/15 mx-auto px-2 pt-2">
            Please enter the transfer amount:
          </p>
          <div className="w-full cursor-pointer text-blue-500 text-[20px] px-2 border-white/20 h-[70%] flex justify-between gap-1 items-center">
            <img src={dollar} alt="" />
            <input
              type="number"
              placeholder="Type Your Amount"
              onKeyDown={(e) => handleInputKeyDown(e)}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className="pb-3 w-[87%] text-white pt-1 px-2 rounded-xl bg-black/50 border-[1px] border-black placeholder:text-sm placeholder:text-white focus-within:outline-none focus-within:border-none"
            />
          </div>
        </div>
        <ActionBtn
          color="text-blue-500"
          title={"Confirm"}
          onClick={handleAmountConfirm}
          height="h-[30%]"
        />
      </div>
      {/* Pay Page //////////////////////////////////////// */}
      <PaySection
        pay={pay}
        onClick={handleSuccess}
        closeClick={() => setPay(false)}
        inputValue={inputValue}
      />

      {/* payment success /////////////////////////////// */}

      <div
        className={`absolute w-full h-full rounded-[35px] z-0 left-0 top-0 bg-black/50 `}
        style={{ display: paySuccess ? "block" : "none" }}
      >
        <img
          src={paymentsuccess}
          alt=""
          width={170}
          className="absolute top-[50%] lefe-[50%] translate-x-[35%] translate-y-[-50%]"
        />
      </div>
    </div>
  );
};

export default AddNewAccount;
