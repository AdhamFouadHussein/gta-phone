type DataProps = {
  item: string;
  dates: string;
  prices: number;
  credit?: number;
};

const TransactionsData = ({ item, dates, prices, credit }: DataProps) => {
  return (
    <div className="pb-6 text-sm flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="font-bold">{item}</span>
        <p className="text-[#aaa]">{dates}</p>
        <p className="text-[#aaa]">{credit}</p>
      </div>
      <span className="font-bold">${prices}</span>
    </div>
  );
};

export default TransactionsData;
