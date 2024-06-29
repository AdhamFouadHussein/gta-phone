
type Props = {
  firstImage?: string;
  secImage?: string;
  name?: string;
  time?: number;
  dayOrWeek?: string;
};

const SingleLike = ({ firstImage, secImage, name, time, dayOrWeek }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center ">
        <img src={firstImage} alt="" className="w-[17%] rounded-full mr-2" />
        <span className="text-xs font-bold mr-1">{name}</span>
        <p className="text-xs text-stone-300">liked your photo.</p>
        <span className="text-xs text-stone-400">
          {time}
          {dayOrWeek}
        </span>
      </div>
      <img src={secImage} alt="" className="w-[14%]" />
    </div>
  );
};

export default SingleLike;
