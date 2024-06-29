import InstaFooter from "./instComponents/InstaFooter";
import profile1 from "../../assets/images/gallery-12.png";
import profile2 from "../../assets/images/gallery-13.png";
import profile3 from "../../assets/images/gallery-14.png";
import profile4 from "../../assets/images/gallery-4.png";
import profile5 from "../../assets/images/gallery-16.png";
import profile6 from "../../assets/images/gallery-5.png";
import profile7 from "../../assets/images/gallery-6.png";
import profile8 from "../../assets/images/gallery-7.png";
import profile9 from "../../assets/images/gallery-8.png";
import profile10 from "../../assets/images/gallery-9.png";
import profile11 from "../../assets/images/gallery-10.png";
import profile12 from "../../assets/images/gallery-11.png";
import notifImg from "../../assets/images/gallery-18.png";
import SingleLike from "./instComponents/SingleLike";
import MultiLikes from "./instComponents/MultiLikes";
import Mentioned from "./instComponents/Mentioned";
import Following from "./instComponents/Following";
import MessageFollow from "./instComponents/MessageFollow";
import { motion } from "framer-motion";

const InstaLove = () => {
    return (
        <div className="text-white z-10 relative bg-black px-0 -top-1 left-0 w-[100%] h-[101%] rounded-[30px] flex flex-col justify-start items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-12">
                {/* Header section */}
                <div className="w-full ">
                    <div className=" flex justify-between items-center">
                        <span className="block text-center w-[50%] h-8 text-stone-400">
                            Following
                        </span>
                        <span className="block text-center w-[50%] h-8 border-b-2">
                            You
                        </span>
                    </div>
                </div>

                {/* body section */}
                <div
                    className="overflow-hidden noScroll h-[78%]"
                    style={{ borderEndEndRadius: "30px" }}>
                    <span className="block text-sm pl-1 mt-2">
                        Follow Requests
                    </span>
                    {/* New section */}
                    <div className="flex flex-col justify-start px-1 gap-3 mt-4">
                        <span className="text-sm font-bold">New</span>
                        <SingleLike
                            firstImage={profile1}
                            secImage={profile9}
                            name={"Mark_Sayed"}
                            time={2}
                            dayOrWeek={"d"}
                        />

                        <MultiLikes
                            firstImage={profile2}
                            secImage={profile3}
                            thirdImage={notifImg}
                            firstName={"Mark_Sayed"}
                            secName={"John_65Smith"}
                            time={2}
                            dayOrWeek={"d"}
                            all={24}
                        />
                    </div>
                    {/* Today section */}
                    <div className="flex flex-col justify-start px-1 gap-3 mt-4">
                        <span className="text-sm font-bold">Today</span>

                        <Mentioned
                            firstImage={profile5}
                            secImage={profile4}
                            firstName={"Mark Sayed"}
                            secName={"John Smith"}
                            time={2}
                            dayOrWeek={"d"}
                        />
                        <MessageFollow
                            image={profile7}
                            name={"Mark Sayed"}
                            time={2}
                            dayOrWeek={"d"}
                        />

                        <Following
                            image={profile8}
                            name={"John Smith"}
                            time={2}
                            dayOrWeek={"d"}
                            followBtn={"Follow"}
                            messageBtn={"Following"}
                        />
                    </div>
                    {/* This Week section */}
                    <div className="flex flex-col justify-start px-1 gap-3 mt-4">
                        <span className="text-sm font-bold">This Week</span>
                        <SingleLike
                            firstImage={profile9}
                            secImage={profile6}
                            name={"Mark_Sayed"}
                            time={2}
                            dayOrWeek={"d"}
                        />
                        <SingleLike
                            firstImage={profile10}
                            secImage={profile11}
                            name={"Mark_Sayed"}
                            time={2}
                            dayOrWeek={"d"}
                        />
                        <SingleLike
                            firstImage={profile12}
                            secImage={notifImg}
                            name={"Mark_Sayed"}
                            time={2}
                            dayOrWeek={"d"}
                        />
                    </div>
                </div>
            </motion.div>
            {/* footer section*/}
            <div>
                <InstaFooter />
            </div>
        </div>
    );
};

export default InstaLove;
