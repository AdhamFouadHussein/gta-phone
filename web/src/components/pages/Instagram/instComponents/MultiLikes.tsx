type Props = {
    firstImage?: string;
    secImage?: string;
    thirdImage?: string;
    firstName?: string;
    secName?: string;
    time?: number;
    all?: number;
    dayOrWeek?: string;
};

const MultiLikes = ({
    firstImage,
    secImage,
    thirdImage,
    firstName,
    secName,
    time,
    dayOrWeek,
    all,
}: Props) => {
    return (
        <div className="flex justify-between items-center ">
            <div className="flex justify-start items-center  w-[85%] h-full">
                <div className="w-[20%] mr-2 h-10 relative">
                    <img
                        src={firstImage}
                        alt=""
                        className="rounded-full z-0 absolute top-0 left-0 w-[75%] border-2 "
                    />
                    <img
                        src={secImage}
                        alt=""
                        className=" rounded-full z-10 absolute bottom-0 right-0 w-[75%] border-2  "
                    />
                </div>
                <p className="text-xs w-[100%]   text-stone-300">
                    <span className="text-xs font-bold text-white">
                        {firstName},{" "}
                    </span>
                    <span className="text-xs font-bold text-white">
                        {secName}{" "}
                    </span>
                    and{" "}
                    <span className="text-xs font-bold text-white">
                        {all} others
                    </span>{" "}
                    liked your photo.
                    <span className="text-xs text-stone-500">
                        {time}
                        {dayOrWeek}
                    </span>
                </p>
            </div>
            <img src={thirdImage} alt="" className="w-[14%]" />
        </div>
    );
};

export default MultiLikes;
