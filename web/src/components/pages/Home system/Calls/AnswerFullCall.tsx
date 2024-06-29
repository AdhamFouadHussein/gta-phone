import close from "../../../assets/images/closeCall.png";
import noVideoCall from "../../../assets/images/noVideoCall.png";
import videoCallImg from "../../../assets/images/videoCall.png";
import mute from "../../../assets/images/mute.png";
import unmute from "../../../assets/images/unmute.png";
import flip from "../../../assets/images/flip.png";
import videoCallCharacter from "../../../assets/images/videoCallCharacter.png";
import { useEffect, useState } from "react";
import { ChatsType } from "../../../../config/inventory";

type Props = {
    setCalling?: (value: boolean) => void;
    setCallDeclined?: (value: boolean) => void;
    setAnsweredFullCall?: (value: boolean) => void;
    setOpenedFullCall?: (value: boolean) => void;
    setAcceptedCall?: (value: boolean) => void;
    selectedChat?: ChatsType | null;
};

function AnswerFullCall({ setCalling, selectedChat }: Props) {
    const [videoCall, setVideoCall] = useState(false);
    const [muted, setMuted] = useState(false);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [showTime, setShowTime] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTime(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showTime) {
            const callDurationTimer = setInterval(() => {
                setSec((prevSec) => (prevSec === 59 ? 0 : prevSec + 1));
                setMin((prevMin) => (prevMin === 59 ? prevMin + 1 : prevMin));
            }, 1000);
            return () => clearInterval(callDurationTimer);
        }
    }, [showTime]);

    const videoCallHandler = () => {
        setVideoCall(!videoCall);
    };

    const muteHandler = () => {
        setMuted(!muted);
    };

    return (
        <div className="relative z-50 h-[87vh] w-full bg-black/95 pt-36 rounded-[5vw]">
            <div className="w-full h-full flex flex-col justify-between items-center bg-black">
                <div className="w-full flex justify-start items-start gap-4 pl-10">
                    {videoCall ? (
                        <>
                            <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-[90%] h-[75px] z-50 bg-black rounded-full flex  justify-between items-center px-4">
                                <div className="flex justify-center items-center gap-4">
                                    <img src={selectedChat?.img} alt="caller" />
                                    <div className="flex flex-col justify-center items-start text-white">
                                        <h3 className="truncate overflow-ellipsis w-[110px]">
                                            {selectedChat?.userName}
                                        </h3>
                                        <p className="opacity-50">mobile</p>
                                    </div>
                                </div>
                            </div>
                            <img
                                src={videoCallCharacter}
                                alt="videoCallCharacter"
                                className="absolute top-0 left-0 w-full h-[87vh]"
                            />
                        </>
                    ) : (
                        <>
                            <img
                                src={selectedChat?.img}
                                alt="caller"
                                className="w-[40px]"
                            />
                            <div className="flex flex-col justify-start items-start text-white">
                                <h3 className=" text-xl">
                                    {selectedChat?.userName}
                                </h3>
                                <p className="opacity-50">
                                    {showTime
                                        ? `${min}:${sec < 10 ? "0" + sec : sec}`
                                        : "Connecting"}
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <div className="w-full flex justify-between items-center px-5 pb-20 z-10">
                    <div
                        className="flex flex-col items-center justify-center text-white gap-1"
                        onClick={videoCallHandler}>
                        <button className="bg-[#3a3a3b] w-[2.5vw] h-[2.5vw] rounded-full flex flex-col items-center justify-center text-white">
                            <img
                                src={videoCall ? videoCallImg : noVideoCall}
                                alt=""
                                className="w-[1.5vw]"
                            />
                        </button>
                        <p className="text-xs">
                            {videoCall ? "Camera" : "Camera off"}
                        </p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center text-white gap-1"
                        onClick={muteHandler}>
                        <button
                            className={`${
                                muted ? "bg-[#d0d0d0]" : "bg-[#3a3a3b]"
                            } w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center`}>
                            <img
                                src={muted ? mute : unmute}
                                alt="mute"
                                className="w-[1vw]"
                            />
                        </button>
                        <p className="text-xs">{muted ? "Unmute" : "Mute"}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white gap-1">
                        <button className="bg-[#3a3a3b] w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center">
                            <img src={flip} alt="flip" className="w-[20px]" />
                        </button>
                        <p className="text-xs">Flip</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-white gap-1">
                        <button
                            className="bg-[#eb5545] w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center"
                            onClick={() => setCalling && setCalling(false)}>
                            <img src={close} alt="close" className="w-[10px]" />
                        </button>
                        <p className="text-xs">End</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnswerFullCall;
