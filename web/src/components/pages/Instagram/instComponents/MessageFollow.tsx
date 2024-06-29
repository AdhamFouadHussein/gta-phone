type Props = {
  image?: string;
  name?: string;
  time?: number;
  dayOrWeek?: string;
  followBtn?: string;
  messageBtn?: string;
};

const MessageFollow = ({ image, name, time, dayOrWeek }: Props) => {
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

      <button
        className="text-xs px-2 py-1 rounded-md "
        style={{ border: "1px solid #575757" }}
      >
        Message
      </button>
    </div>
  );
};

export default MessageFollow;
