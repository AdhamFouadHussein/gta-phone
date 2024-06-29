import React from "react";
import TransactionsData from "./components/TransactionsData";
import leftArrow from "../../assets/images/Bank/leftArrow.png";

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
  {
    title: "Books",
    date: "Wed 12.05.2021",
    price: 1300.2,
  },
  {
    title: "Books",
    date: "Wed 12.05.2021",
    price: 1300.2,
  },
  {
    title: "Books",
    date: "Wed 12.05.2021",
    price: 1300.2,
  },
  {
    title: "Books",
    date: "Wed 12.05.2021",
    price: 1300.2,
  },
];

type handle = {
  handleClose?: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
};

const BankTransactions = ({ handleClose, open }: handle) => {
  return (
    <div
      className={`absolute text-black bg-white h-[80%] ${
        open ? "w-[100%]" : "w-[0] opacity-0"
      } top-10 right-0 px-2 `}
      style={{ transition: "1s" }}
    >
      <div className="pb-3 pl-2">
        <span className="block pb-2 cursor-pointer" onClick={handleClose}>
          <img src={leftArrow} alt="" />
        </span>
        <span className="text-xl font-bold">Transactions</span>
      </div>
      <div className="p-4 h-[88%] overflow-y-scroll noScroll">
        {data.map((d, index) => (
          <div key={index}>
            <TransactionsData
              item={d.title}
              dates={d.date}
              prices={d.price}
              credit={d.credit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankTransactions;
