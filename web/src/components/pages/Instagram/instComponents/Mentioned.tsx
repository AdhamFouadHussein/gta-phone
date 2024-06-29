type Props = {
  firstImage?: string;
  secImage?: string;
  firstName?: string;
  secName?: string;
  time?: number;
  dayOrWeek?: string;
};

const Mentioned = ({
  firstImage,
  secImage,
  firstName,
  secName,
  time,
  dayOrWeek,
}: Props) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex justify-start items-center  w-[85%] h-full">
        <div className="w-[20%] mr-2 h-10 relative">
          <img
            src={firstImage}
            alt=""
            className=" rounded-full z-10 absolute bottom-0 right-0 w-[100%]"
          />
        </div>
        <p className="text-xs w-[100%] text-stone-300">
          <span className="text-xs font-bold text-white mr-1">{firstName}</span>
          mentioned you in a comment:
          <span className="text-xs font-bold text-white pl-1">{secName}</span>
          <span className="text-xs text-stone-500">
            <span className="font-bold text-white">{time}</span>
            {dayOrWeek}
          </span>
        </p>
      </div>
      <img src={secImage} alt="" className="w-[14%]" />
    </div>
  );
};

export default Mentioned;
