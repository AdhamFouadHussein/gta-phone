import { useState } from "react";
import PropTypes from "prop-types";
import callAnswer from "../../../assets/images/callAnswer.png";
import callDecline from "../../../assets/images/callDecline.png";
import caller from "../../../assets/images/caller.png";
import AcceptedCallNotification from "./AcceptedCallNotification";
import FullCall from "./FullCall";
import AnswerFullCall from "./AnswerFullCall";
function CallNotification ( { setCallDeclined } )
{
    const [ acceptedCall, setAcceptedCall ] = useState( false );
    const [ openedFullCall, setOpenedFullCall ] = useState( false );
    const [ answeredFullCall, setAnsweredFullCall ] = useState( false );
    return (
        <>
            {openedFullCall ? (
                <div className="absolute z-50 left-0 top-0 h-screen w-full bg-black/95 flex flex-col justify-between items-center pt-36">
                    {answeredFullCall ? (
                        <AnswerFullCall
                            setCallDeclined={setCallDeclined}
                            setAnsweredFullCall={setAnsweredFullCall}
                            setOpenedFullCall={setOpenedFullCall}
                            setAcceptedCall={setAcceptedCall}
                        />
                    ) : (
                        <FullCall
                            setCallDeclined={setCallDeclined}
                            setAnsweredFullCall={setAnsweredFullCall} z
                        />
                    )}
                </div>
            ) : (
                <div
                    className={`${ acceptedCall
                        ? "absolute left-1/2 top-1 transform -translate-x-1/2 w-[380px] h-[110px] z-50 bg-black rounded-3xl flex-col flex justify-start items-start px-4 gap-3"
                        : " absolute left-1/2 top-1 transform -translate-x-1/2 w-[380px] h-[75px] z-50 bg-black rounded-full flex  justify-between items-center px-4"
                        } `} style={{ zIndex: 300 }}>
                    <div
                        className="flex justify-center items-center gap-4"
                        onClick={() =>
                        {
                            if ( acceptedCall )
                            {
                                setAnsweredFullCall( true );
                                setOpenedFullCall( true );
                            } else
                            {
                                setOpenedFullCall( true );
                            }
                        }}>
                        <img src={caller} alt="caller" />
                        <div className="flex flex-col justify-center items-start text-white">
                            <h3 className="truncate overflow-ellipsis w-[110px]">
                                Peter Herbert Barnaba
                            </h3>
                            <p className="opacity-50">mobile</p>
                        </div>
                    </div>
                    {acceptedCall ? (
                        <AcceptedCallNotification setCallDeclined={setCallDeclined} />
                    ) : (
                        <div className="flex justify-center items-center gap-4">
                            <button>
                                <img
                                    src={callDecline}
                                    alt="callDecline"
                                    onClick={() => setCallDeclined( true )}
                                />
                            </button>
                            <button onClick={() => setAcceptedCall( true )}>
                                <img src={callAnswer} alt="callAnswer" />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

CallNotification.propTypes = {
    setCallDeclined: PropTypes.func.isRequired,
};

export default CallNotification;
