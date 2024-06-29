import caller from "../../../assets/images/caller.png";
import callAnswer from "../../../assets/images/callAnswer.png";
import close from "../../../assets/images/closeCall.png";
import noVideoCall from "../../../assets/images/noVideoCall.png";
import unMute from "../../../assets/images/unmute.png";
import flip from "../../../assets/images/flip.png";
import { useEffect, useState } from "react";

type Props = {
    setMakeCall: (value: boolean) => void;
};
function MakeCall({ setMakeCall }: Props) {
    const [redial, setRedial] = useState(false);

    useEffect(() => {
        if (redial) {
            const timer = setTimeout(() => {
                setMakeCall(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [redial, setMakeCall]);

    return (
        <div
            className={`absolute z-50 left-0 top-0 h-[88vh] w-full ${
                redial ? "bg-black" : "bg-black/95 "
            } flex flex-col justify-between items-center pt-36`}>
            {redial ? (
                <div className="w-full h-full flex flex-col justify-between items-center opacity-30 ">
                    <div className="w-full flex justify-start items-start gap-4 pl-16">
                        <img src={caller} alt="caller" className="w-[60px]" />
                        <div className="flex flex-col justify-start items-start text-white">
                            <h3 className=" text-3xl">Peter Herbert</h3>
                            <p className="opacity-50 text-lg">Call Failed</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-end px-10 pb-20 z-10">
                        <div className="flex flex-col items-center justify-center text-white gap-1">
                            <button
                                disabled
                                className="bg-[#3a3a3b] w-[2.5vw] h-[2.5vw] rounded-full flex flex-col items-center justify-center text-white">
                                <img src={noVideoCall} alt="videoCallImg" />
                            </button>
                            <p className="text-xs">{"Camera"}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-white gap-1">
                            <button
                                disabled
                                className={`bg-[#3a3a3b] w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center`}>
                                <img src={unMute} alt="mute" />
                            </button>
                            <p className="text-xs">{"Mute"}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-white gap-1">
                            <button
                                disabled
                                className="bg-[#3a3a3b] w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center">
                                <img src={flip} alt="flip" />
                            </button>
                            <p className="text-xs">Flip</p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-white gap-1">
                            <button
                                disabled
                                className="bg-[#eb5545] w-[2.5vw] h-[2.5vw] rounded-full flex items-center justify-center">
                                <img
                                    src={close}
                                    alt="close"
                                    className="w-[1vw]"
                                />
                            </button>
                            <p className="text-xs">End</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <div className="w-full flex justify-start items-start gap-4 pl-16">
                        <img src={caller} alt="caller" className="w-[60px]" />
                        <div className="flex flex-col justify-start items-start text-white">
                            <h3 className=" text-3xl">Peter Herbert</h3>
                            <p className="opacity-50 text-lg">{"User Busy"}</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-end px-10 pb-20 z-10">
                        <div className="flex flex-col justify-center items-center gap-1">
                            <button
                                className="w-[3vw] h-[3vw] bg-[#ea544a] rounded-full flex flex-col justify-center items-center"
                                onClick={() => setMakeCall(false)}>
                                <img src={close} alt="close" />
                            </button>
                            <p className="text-white">End</p>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center gap-1"
                            onClick={() => setRedial(true)}>
                            <button className="flex flex-col justify-center items-center">
                                <img
                                    src={callAnswer}
                                    alt="callAnswer"
                                    className="w-[3vw]"
                                />
                            </button>
                            <p className="text-white">Redial</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MakeCall;
