import callAnswer from "../../../assets/images/callAnswer.png";
import callDecline from "../../../assets/images/callDecline.png";
import caller from "../../../assets/images/caller.png";
import message2 from "../../../assets/images/message2.png";
import PropTypes from "prop-types";


function FullCall ( { setCallDeclined, setAnsweredFullCall } )
{
    return (
        <>
            <div className="w-full flex justify-start items-start gap-4 pl-20 ">
                <img src={caller} alt="caller" className="w-[60px]" />
                <div className="flex flex-col justify-start items-start text-white">
                    <h3 className=" text-3xl">Peter Herbert</h3>
                    <p className="opacity-50">incoming call</p>
                </div>
            </div>
            <div className="absolute bottom-[300px] right-[-95px] w-full text-white flex flex-col justify-center items-center text-center text-sm">
                <img src={message2} alt="message 2" />
                <p>Message</p>
            </div>
            <div className="w-full flex justify-between items-center px-20 pb-36">
                <button className="flex flex-col justify-center items-center gap-2 text-white text-sm" onClick={() => setCallDeclined( true )}>
                    <img src={callDecline} alt="" className="w-[60px]" />
                    <p>Decline</p>
                </button>
                <button className="flex flex-col justify-center items-center gap-2 text-white text-sm" onClick={() => setAnsweredFullCall( true )}>
                    <img src={callAnswer} alt="" className="w-[60px]" />
                    <p>Accept</p>
                </button>
            </div>
        </>
    );
}

FullCall.propTypes = {
    setCallDeclined: PropTypes.func.isRequired,
    setAnsweredFullCall: PropTypes.func.isRequired
};
export default FullCall;