import React, { useState } from "react";
import cardActive from "../../assets/images/Bank/cardActive.png";
import transfer from "../../assets/images/Bank/transfer.png";

import BankFooter from "./components/BankFooter";
import TransactionsData from "./components/TransactionsData";
import { motion } from "framer-motion";
import BankTransactions from "./BankTransactions";

const data = [
  {
    title: "Clothes",
    date: "Tue 12.05.2021",
    price: 129.9,
    credit: 129.9,
  },
  {
    title: "Movie Ticket",
    date: "Mon 12.05.2021",
    price: 9.2,
  },
  {
    title: "Car",
    date: "Sat 12.05.2021",
    price: 9129.9,
  },
  {
    title: "Family",
    date: "Sun 12.05.2021",
    price: 721.4,
  },
  {
    title: "Books",
    date: "Wed 12.05.2021",
    price: 1300.2,
  },
];

const BankHome = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCLose = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="backGroundBank relative z-0 rounded-[35px] w-full h-full"
    >
      {/* start header */}
      <div className="pt-12 px-5 text-sm">
        <span>Welcome back</span>
        <h1 className="pl-4 text-lg font-bold">
          {/* <span className="text-lg font-bold">{"<<"}</span> */}
          John West
          {/* <span className="text-lg font-bold">{">>"}</span> */}
        </h1>
      </div>
      {/* end header */}

      {/* start body */}
      <div className="px-3 pt-2 flex flex-col gap-3">
        {/* start card */}
        <div className="w-full rounded-[20px] h-[170px] flex flex-col justify-between">
          <div className="text-sm rounded-t-[20px] bg-white flex flex-col gap-3 p-4 h-[50%] w-full">
            <span>Current Balance</span>
            <h1 className="text-[24px] font-bold">$12567.89</h1>
          </div>
          <div className="text-white rounded-b-[20px] p-4 h-[50%] w-full bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500">
            <span className="block">3452 1235 7894 1678</span>
            <span>05 / 2025</span>
          </div>
        </div>
        {/* end card */}
        {/* start transactions */}
        <div className="pl-1 cursor-pointer" onClick={handleOpen}>
          <span className="text-xs text-[#aaa] font-bold">
            LAST TRANSACTIONS
          </span>
          <div className="p-3 bg-white h-[205px] rounded-xl overflow-y-scroll noScroll">
            {data.map((d, index) => (
              <div key={index}>
                <TransactionsData
                  item={d.title}
                  dates={d.date}
                  prices={d.price}
                />
              </div>
            ))}
          </div>
        </div>
        {/* end transactions */}
      </div>
      {/* end body */}

      {/* start transactions page */}
      <div>
        <BankTransactions handleClose={handleCLose} open={open} />
      </div>
      {/* end transactions page */}

      {/* start footer */}
      <BankFooter img1={cardActive} img2={transfer} />
      {/* end footer */}
    </motion.div>
  );
};

export default BankHome;
