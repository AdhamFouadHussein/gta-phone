import { useState } from "react";
import focs from "../../../assets/images/focs.png";
import sound from "../../../assets/images/sound.png";
import sun from "../../../assets/images/sun.png";
import bed from "../../../assets/images/bed.png";
import SliderRange from "./components/SliderRange";
import AirPods from "./components/AirPods";
import ControlCenterBtn from "./components/ControlCenterBtn";
import MoodSection from "./components/MoodSection";
import {
    Disturb,
    alarm,
    bedIcon,
    bluetooth,
    camera,
    car,
    flashLight,
    person,
    plan,
    screenRecord,
    signalOff,
    signalOn,
    simCard,
    stopWatch,
    timers,
    wifi,
    work,
} from "./components/svgData";

const ControlCenter = () => {
    const [flightBtn, setflightBtn] = useState(false);
    const [cellularDataBtn, setcellularDataBtn] = useState(false);
    const [WifiBtn, setWifiBtn] = useState(false);
    const [bluetoothBtn, setbluetoothBtn] = useState(false);
    const [dataOn, setDataOff] = useState(false);
    const [isActive, setIsActive] = useState("Sleep");
    const [moodOn, setMoodOn] = useState("none");

    const handleMoodOn = () => setMoodOn("block");
    const handleMoodOf = () => setMoodOn("none");
    const handleWifiBtnClick = () => setWifiBtn(!WifiBtn);
    const handleBluetoothBtnClick = () => setbluetoothBtn(!bluetoothBtn);
    const handleflightBtnClick = () => setflightBtn(!flightBtn);

    const handlecellularDataBtnClick = () => {
        setcellularDataBtn(!cellularDataBtn);
        setDataOff(!dataOn);
    };

    return (
        <>
            {/* Mood Section */}
            <div
                className="absolute w-full h-full  rounded-[30px] bg-black/80 backdrop-blur-md top-0 z-30 flex flex-col justify-center items-center"
                style={{
                    display: moodOn,
                }}>
                <div className="w-full h-full flex justify-start mt-[150px] items-center flex-col">
                    <MoodSection
                        moodTitle={"Do Not Disturb"}
                        moodIcon={Disturb}
                        handleOnClickActive={() =>
                            setIsActive("Do Not Disturb")
                        }
                        BGCOLOR={
                            isActive === "Do Not Disturb"
                                ? "bg-white"
                                : "bg-black"
                        }
                        TEXTCOLOR={
                            isActive === "Do Not Disturb"
                                ? "text-black"
                                : "text-white"
                        }
                    />
                    <MoodSection
                        moodTitle={"Person"}
                        moodIcon={person}
                        handleOnClickActive={() => setIsActive("Person")}
                        BGCOLOR={
                            isActive === "Person" ? "bg-white" : "bg-black"
                        }
                        TEXTCOLOR={
                            isActive === "Person" ? "text-black" : "text-white"
                        }
                    />
                    <MoodSection
                        moodTitle={"Work"}
                        moodIcon={work}
                        handleOnClickActive={() => setIsActive("Work")}
                        BGCOLOR={isActive === "Work" ? "bg-white" : "bg-black"}
                        TEXTCOLOR={
                            isActive === "Work" ? "text-black" : "text-white"
                        }
                    />
                    <MoodSection
                        moodTitle={"Sleep"}
                        moodIcon={bedIcon}
                        handleOnClickActive={() => setIsActive("Sleep")}
                        BGCOLOR={isActive === "Sleep" ? "bg-white" : "bg-black"}
                        TEXTCOLOR={
                            isActive === "Sleep" ? "text-black" : "text-white"
                        }
                    />

                    <button
                        className="mt-[60px] bg-neutral-900 w-11 h-11 rounded-[50%] pb-1"
                        onClick={handleMoodOf}>
                        x
                    </button>
                </div>
            </div>
            <div className="absolute rounded-[30px] z-20 w-full h-full flex flex-col justify-start items-center gap-1">
                {/* First Section */}
                <div className="w-[90%] h-[20%] flex justify-between items-center gap-2">
                    {/* signals section */}
                    <div className="bg-neutral-900 w-full h-full rounded-xl  flex flex-wrap justify-center items-center gap-3">
                        <ControlCenterBtn
                            svgIcon={plan}
                            round={"rounded-[50%]"}
                            iconWidth={"35%"}
                            iconHeight={"35%"}
                            handleClick={handleflightBtnClick}
                            question={flightBtn}
                            firstBg={"bg-neutral-600"}
                            secondBg={"bg-amber-500"}
                        />
                        <ControlCenterBtn
                            svgIcon={!dataOn ? signalOff : signalOn}
                            round={"rounded-[50%]"}
                            iconWidth={"35%"}
                            iconHeight={"35%"}
                            handleClick={handlecellularDataBtnClick}
                            question={dataOn}
                            firstBg={"bg-neutral-200"}
                            secondBg={"bg-green-600"}
                            pading={"p-3"}
                        />
                        <ControlCenterBtn
                            svgIcon={wifi}
                            round={"rounded-[50%]"}
                            iconWidth={"35%"}
                            iconHeight={"35%"}
                            handleClick={handleWifiBtnClick}
                            question={WifiBtn}
                            firstBg={"bg-blue-500"}
                            secondBg={"bg-neutral-600"}
                        />
                        <ControlCenterBtn
                            svgIcon={bluetooth}
                            round={"rounded-[50%]"}
                            iconWidth={"35%"}
                            iconHeight={"35%"}
                            handleClick={handleBluetoothBtnClick}
                            question={bluetoothBtn}
                            firstBg={"bg-blue-500"}
                            secondBg={"bg-neutral-600"}
                        />
                    </div>
                    {/* AirPods Section  */}
                    <AirPods />
                </div>
                <div className="w-[90%] h-[20%]  flex  justify-between items-center ">
                    {/* Second Section */}
                    <div className=" w-full h-full flex flex-wrap justify-center items-center gap-[16px]">
                        <ControlCenterBtn
                            svgIcon={car}
                            round={"rounded-[25%]"}
                            firstBg={"bg-neutral-900"}
                            iconWidth={"43%"}
                            iconHeight={"43%"}
                        />
                        <ControlCenterBtn
                            svgIcon={simCard}
                            round={"rounded-[25%]"}
                            firstBg={"bg-neutral-900"}
                            iconWidth={"43%"}
                            iconHeight={"43%"}
                        />
                        {/* bg-black/60 backdrop-blur-md */}
                        <div
                            className="w-full bg-neutral-900 py-2 flex justify-center gap-[16px] items-start"
                            style={{ borderRadius: "15px 15px 15px 15px" }}>
                            <div className="bg-neutral-600 w-[30%] p-3 rounded-[50%] flex items-center justify-center">
                                <img src={focs} alt="" className="w-[70%]" />
                            </div>
                            <button className="my-auto text-[17px] tracking-wider">
                                Foucs
                            </button>
                        </div>
                    </div>
                    {/* AirPods Section  */}
                    <div className="w-[100%] h-[100%] flex justify-between items-center controlSlider">
                        <SliderRange image={sun} valueNum={40} />
                        <SliderRange image={sound} valueNum={60} padd={"4px"} />
                    </div>
                </div>
                {/* Second Section */}

                {/* Third Section */}
                <div className="w-[90%] h-[20%] mt-3 gap-2 pr-2 flex justify-between items-center ">
                    {/* flash & camera section */}
                    <div className=" w-full h-full flex flex-wrap justify-center items-start gap-3">
                        <ControlCenterBtn
                            svgIcon={flashLight}
                            round={"rounded-[25%]"}
                            firstBg={"bg-neutral-900"}
                            iconWidth={"43%"}
                            iconHeight={"43%"}
                        />
                        <ControlCenterBtn
                            svgIcon={camera}
                            round={"rounded-[25%]"}
                            firstBg={"bg-neutral-900"}
                            iconWidth={"43%"}
                            iconHeight={"43%"}
                        />
                        <ControlCenterBtn
                            svgIcon={alarm}
                            round={"rounded-[25%]"}
                            firstBg={"bg-neutral-900"}
                            iconWidth={"43%"}
                            iconHeight={"43%"}
                        />
                        <ControlCenterBtn
                            svgIcon={stopWatch}
                            round={"rounded-[25%]"}
                            firstBg={"bg-neutral-900"}
                            iconWidth={"43%"}
                            iconHeight={"43%"}
                        />
                        <div className="w-[100%]  flex justify-center gap-[12px] items-start"></div>
                    </div>
                    {/* sleep on section */}
                    <div className="w-full h-full ml-4 flex flex-wrap justify-center items-start gap-0">
                        <div
                            className=" bg-stone-200 w-full h-[42%] flex flex-col justify-center items-center rounded-[21px]"
                            onClick={handleMoodOn}>
                            <div className="w-full flex justify-center gap-[12px] pr-3 items-start">
                                <div className="bg-stone-300 w-[30%] p-2 mt-1 rounded-[50%] flex items-center justify-center">
                                    <img
                                        src={bed}
                                        alt=""
                                        className="w-[100%]"
                                    />
                                </div>
                                <div className="text-black text-[13px] font-bold ml-2 tracking-wider">
                                    <span className="block">Sleep</span>
                                    <span>on</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-between items-start mt-[11px]">
                            <ControlCenterBtn
                                svgIcon={screenRecord}
                                round={"rounded-[25%]"}
                                firstBg={"bg-neutral-900"}
                                iconWidth={"45%"}
                                iconHeight={"45%"}
                            />
                            <ControlCenterBtn
                                svgIcon={timers}
                                round={"rounded-[25%]"}
                                firstBg={"bg-neutral-900"}
                                iconWidth={"45%"}
                                iconHeight={"45%"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ControlCenter;
