// import Keypad from "../../../assets/images/Keypad.png";
import KeypadActive from "../../../assets/images/KeypadActive.png";
import ContactsImg from "../../../assets/images/Contacts.png";
// import ContactsActive from "../../../assets/images/ContactsActive.png";
import ClockRecent from "../../../assets/images/ClockRecent.png";
// import ClockRecentActive from "../../../assets/images/ClockRecentActive.png";
import callAnswer from "../../../assets/images/callAnswer.png";
import Eraser from "../../../assets/images/Eraser.png";
import { useState } from "react";
import Contacts from "../contacts/Contacts";
import MakeCall from "./MakeCall";
import AddContact from "../contacts/AddContact";
import { motion } from "framer-motion";
import HomeBar from "../../../components/ui/HomeBar/HomeBar";

type Props = {
    makeCall?: boolean;
    setMakeCall: (value: boolean) => void;
};
function Keyboard({ makeCall, setMakeCall }: Props) {
    const [contacts, setContacts] = useState(false);
    const [addNumber, setAddNumber] = useState(false);
    // const [ recents, setRecents ] = useState( false );
    // const [ keypad, setKeypad ] = useState( false );
    const [inputNumbers, setInputNumbers] = useState("");

    const handleNumberClick = (number: string | number) => {
        setInputNumbers((prevInput) => prevInput + number);
    };

    const handleEraserClick = () => {
        setInputNumbers((prevInput) => prevInput.slice(0, -1));
    };

    const handleCall = () => {
        if (inputNumbers.length > 0) {
            setMakeCall && setMakeCall(true);
        }
    };

    const buttonsSize: string = "50px";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="relative h-full z-10">
            {makeCall && (
                <div className="relative w-full h-full">
                    <MakeCall setMakeCall={setMakeCall} />
                </div>
            )}
            <div className="relative h-full">
                {contacts && (
                    <div className="h-[100vh]">
                        <Contacts />
                        <HomeBar bottom="20px" />
                    </div>
                )}

                {addNumber && (
                    <div className=" text-white w-full h-[100vh] rounded-[30px] bottom-[-100px]  bg-white">
                        <div
                            className={`Contact pt-[30px] absolute w-full h-full ${
                                addNumber ? "openContact" : "closeContact"
                            } z-50`}>
                            {addNumber && (
                                <AddContact setShowAddContact={setAddNumber} />
                            )}
                        </div>
                    </div>
                )}

                <div className="relative rounded-[40px] h-full  overflow-hidden flex flex-col justify-center items-center px-10 bg-white gap-5">
                    <div className="w-[95%] mx-auto overflow-hidden inputNumbers flex flex-col justify-center items-center  h-[60px]">
                        <h1 className="text-3xl">{inputNumbers}</h1>
                        {inputNumbers.length > 0 && (
                            <p
                                className="text-[#3e74b0] font-[500] text-sm"
                                onClick={() => setAddNumber(true)}>
                                Add Number
                            </p>
                        )}
                    </div>
                    <div className="keyboardNums w-full flex flex-col justify-center items-center gap-2">
                        <div className="pads w-full grid grid-cols-3 grid-rows-4 gap-5 mx-auto">
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full`}
                                onClick={() => handleNumberClick(1)}>
                                <p className="text-black text-2xl">1</p>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(2)}>
                                <p className="text-black text-2xl">2</p>
                                <span className="text-[8px] font-bold">
                                    A B C
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(3)}>
                                <p className="text-black text-2xl">3</p>
                                <span className="text-[8px] font-bold">
                                    D E F
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(4)}>
                                <p className="text-black text-2xl">4</p>
                                <span className="text-[8px] font-bold">
                                    G H I
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(5)}>
                                <p className="text-black text-2xl">5</p>
                                <span className="text-[8px] font-bold">
                                    J K L
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(6)}>
                                <p className="text-black text-2xl">6</p>
                                <span className="text-[8px] font-bold">
                                    M N O
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(7)}>
                                <p className="text-black text-2xl">7</p>
                                <span className="text-[8px] font-bold">
                                    P Q R S
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(8)}>
                                <p className="text-black text-2xl">8</p>
                                <span className="text-[8px] font-bold">
                                    T U V
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(9)}>
                                <p className="text-black text-2xl">9</p>
                                <span className="text-[8px] font-bold">
                                    W X Y Z
                                </span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick("*")}>
                                <p className="text-black text-2xl">*</p>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick(0)}>
                                <p className="text-black text-2xl">0</p>
                                <span className="text-[8px] font-bold">+</span>
                            </button>
                            <button
                                className={`bg-[#e2e2e2] w-[${buttonsSize}] h-[${buttonsSize}] rounded-full flex flex-col justify-center items-center`}
                                onClick={() => handleNumberClick("#")}>
                                <p className="text-black text-2xl">#</p>
                            </button>
                        </div>
                        <div className="w-full action flex justify-evenly items-center ">
                            <div></div>
                            <div onClick={handleCall}>
                                <img
                                    src={callAnswer}
                                    alt="callAnswer"
                                    className="w-[90%] ml-5 "
                                />
                            </div>
                            <div onClick={() => handleEraserClick()}>
                                <img src={Eraser} alt="Eraser" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full footer flex justify-center items-center gap-4">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <button>
                                <img src={ClockRecent} alt="" />
                            </button>
                            <p className="text-sm text-[#a3a3a3]">Recents</p>
                        </div>
                        <div
                            className="flex flex-col justify-center items-center gap-2"
                            onClick={() => setContacts(true)}>
                            <button>
                                <img src={ContactsImg} alt="" />
                            </button>
                            <p className="text-sm text-[#a3a3a3]">Contacts</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <button>
                                <img src={KeypadActive} alt="KeypadActive" />
                            </button>
                            <p className="text-sm text-[#a3a3a3]">Keypad</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Keyboard;
