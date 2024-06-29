import PropTypes from "prop-types";
import callDecline from "../../../assets/images/callDecline.png";
import messageFill from "../../../assets/images/messageFill.png";
import micFill from "../../../assets/images/micFill.png";
import videoFill from "../../../assets/images/videoFill.png";
function AcceptedCallNotification ( { setCallDeclined } )
{
    return (
        <div className="w-full flex justify-between items-center gap-4">
            <button>
                <img src={messageFill} alt="messageFill" />
            </button>
            <button>
                <img src={micFill} alt="micFill" />
            </button>
            <button>
                <img src={videoFill} alt="videoFill" />
            </button>
            <button>
                <img src={callDecline} alt="callDecline" onClick={() => setCallDeclined( true )} />
            </button>
        </div>
    );
}

AcceptedCallNotification.propTypes = {
    setCallDeclined: PropTypes.func.isRequired,
};
export default AcceptedCallNotification;