import Clock from "../../../components/Clock";
import cameraBtn from "../../../assets/images/Camera-button.png";
import flashBtn from "../../../assets/images/flashbtn.png";
import phone from "../../../assets/images/phone.png";
import facebook from "../../../assets/images/facebook.png";
import tiktok from "../../../assets/images/tiktok.png";
import snapchat from "../../../assets/images/snapchat.png";
import ex from "../../../assets/images/ex.png";
import Instashot from "../../../assets/images/insta.png";
import whatsApp from "../../../assets/images/whatsApp.png";
import faceIdIcon from "../../../assets/images/faceidIcon.png";

type Props = {
    handleClickOpen: () => void;
};
const Notifications = ({ handleClickOpen }: Props) => {
    const showDateMounth = new Date().toLocaleDateString("en-US", {
        month: "long",
    });
    const showDateDay = new Date().toLocaleDateString("en-US", {
        weekday: "long",
    });
    const showDateDayDigital = new Date().toLocaleDateString("en-US", {
        day: "2-digit",
    });

    const apps = [
        {
            name: "Faces",
            icon: facebook,
            path: "/facebook",
        },
        {
            name: "TicTakTok",
            icon: tiktok,
            path: "/tiktok",
        },
        {
            name: "SnapOO",
            icon: snapchat,
            path: "/snapchat",
        },
        {
            name: "EX",
            icon: ex,
            path: "/ex",
        },
        {
            name: "Phone",
            icon: phone,
            path: "/setting",
        },
        {
            name: "Instashot",
            icon: Instashot,
            path: "/Instashot",
        },
        {
            name: "ChatBro",
            icon: whatsApp,
            path: "/whatsApp",
        },
        {
            name: "ChatBro",
            icon: whatsApp,
            path: "/whatsApp",
        },
        {
            name: "ChatBro",
            icon: whatsApp,
            path: "/whatsApp",
        },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-around flex-col">
            {/* Time & Date */}
            <div className=" relative w-full h-[25%] pt-10 flex flex-col items-center  text-[17px]">
                <h1
                    className="absolute top-9"
                    style={{
                        transition: "translate(-50%)",
                        color: "#AAF7FB",
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                    }}>
                    {showDateDay}, {showDateMounth} {showDateDayDigital}
                </h1>
                <span
                    className="text-[80px] block"
                    style={{
                        color: "#AAF7FB",
                        fontFamily: "sans-serif",
                        fontWeight: "600",
                    }}>
                    <Clock />
                </span>
            </div>
            {/* Notifications */}
            <div className="w-full h-[75%] mt-4 flex flex-col items-start justify-start overflow-y-auto noScroll">
                {apps.map((item, index) => {
                    return (
                        <div
                            key={index + "p"}
                            className="w-[90%] h-[20%] flex justify-between items-center gap-3 mx-auto px-3 py-4 rounded-2xl mb-2 "
                            style={{ backgroundColor: "rgb(49 49 49 / 72%)" }}>
                            <div className="w-[13%]">
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <div className="w-full flex-1 flex justify-between">
                                <div className="flex-1">
                                    <span className="block text-[15px] font-bold  tracking-[.5px]">
                                        {item.name}
                                    </span>
                                    <span className="text-[14px] tracking-[1px]">
                                        Details
                                    </span>
                                </div>
                                <span className="text-stone-400 text-[14px]">
                                    now
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* footer btns */}
            <div className="relative w-full h-[19%]">
                <div
                    className="absolute bg-white w-full h-full top-0 left-0 "
                    style={{
                        boxShadow: "rgb(20, 21, 32) 0px -21px 36px 10px",
                        top: "-15px",
                        height: "26%",
                        backgroundColor: "#141520e0",
                        filter: "blur(18px)",
                    }}></div>
                <div className="bg-transparent relative z-10 pt-3 flex-1 flex items-start justify-evenly  ">
                    <div
                        className="w-[14%] hover:opacity-60 transition-all ease-in-out duration-300"
                        style={{
                            backgroundColor: "#ffffff15",
                            borderRadius: "48px",
                        }}>
                        <img
                            src={flashBtn}
                            alt=""
                            className="cursor-pointer flex justify-center items-center w-full"
                        />
                    </div>
                    <div
                        className="w-[36%] py-[10px] px-1 rounded-xl flex justify-center items-center gap-2 hover:opacity-60 transition-all ease-in-out duration-300"
                        style={{
                            backgroundColor: "rgba(0, 122, 255, 0.2)",
                        }}
                        onClick={handleClickOpen}>
                        <img
                            src={faceIdIcon}
                            alt=""
                            className="cursor-pointer flex justify-center items-center w-[25%]"
                        />
                        <span>Unlock</span>
                    </div>
                    <div
                        className="w-[14%] hover:opacity-60 transition-all ease-in-out duration-300"
                        style={{
                            backgroundColor: "#ffffff15",
                            borderRadius: "48px",
                        }}>
                        <img
                            src={cameraBtn}
                            alt=""
                            className="cursor-pointer flex justify-center items-center w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
