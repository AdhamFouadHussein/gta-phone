import { useState } from "react";

type Props = {
  image?: string;
  name?: string;
  time?: number;
  dayOrWeek?: string;
  followBtn?: string;
  messageBtn?: string;
};

const Following = ({
  image,
  name,
  time,
  dayOrWeek,
  followBtn,
  messageBtn,
}: Props) => {
  const [follow, setFollow] = useState(false);

  const handleFollow = () => setFollow(!follow);

  return (
    <div className="flex justify-between items-center ">
      <div className="flex justify-start items-center  w-[85%] h-full">
        <div className="w-[23%] mr-2 h-10 relative">
          <img
            src={image}
            alt=""
            className=" rounded-full z-10 absolute bottom-0 right-0 w-[100%]"
          />
        </div>
        <p className="text-xs w-[100%] text-stone-300">
          <span className="text-xs font-bold text-white">{name} </span>
          started following you.
          <span className="text-xs ml-1 text-stone-500">
            {time}
            {dayOrWeek}
          </span>
        </p>
      </div>
      <div onClick={handleFollow}>
        {!follow ? (
          <button
            className="text-xs font-bold bg-sky-500 px-[14px] py-1 rounded-md border-none outline-none "
            style={{ border: "1px solid #575757" }}
          >
            {followBtn}
          </button>
        ) : (
          <button
            className="text-xs px-2 py-1 rounded-md "
            style={{ border: "1px solid #575757" }}
          >
            {messageBtn}
          </button>
        )}
      </div>
    </div>
  );
};

export default Following;
