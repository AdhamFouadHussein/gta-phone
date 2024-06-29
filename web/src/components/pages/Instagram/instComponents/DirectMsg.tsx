import Icon from "../../../../config/Icon";
import { InstaUserData } from "../../../../config/inventory";
import { ChevronRight } from "../../../../config/svgIcons";
import Avatar from "react-avatar";

type Props = {
    contact: InstaUserData;
    onClick?: () => void;
};

const DirectMsg = ({ contact, onClick }: Props) => {
    // const timeFormat = (time: string) => {
    //     const timeInMinutes = Number(time);
    //     if (timeInMinutes >= 120) {
    //         const hours = Math.floor(timeInMinutes / 60);
    //         const minutes = timeInMinutes % 60;
    //         return `${hours}h ${minutes}m`;
    //     } else if (timeInMinutes >= 60) {
    //         const hours = Math.floor(timeInMinutes / 60);
    //         return `${hours}h`;
    //     } else if (timeInMinutes < 10) {
    //         // Ensure single-digit minutes are prefixed with a leading zero
    //         return `${time.slice(1)}m`;
    //     } else {
    //         return `${timeInMinutes}m`;
    //     }
    // };

    // // Combine received and sent messages into one array
    // const allMessages = [
    //     ...(message.receptMessages?.flatMap((msg) => msg.messages) || []),
    //     ...(message.sentMessages?.flatMap((msg) => msg.messages) || []),
    // ];

    // // Sort all messages by date/time and get the latest message
    // const sortedMessages = allMessages.sort(
    //     (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    // );

    // const latestMessage = sortedMessages[0]?.msg;

    return (
        <div
            className="flex justify-between items-center mt-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/25 "
            onClick={onClick}>
            <div className="flex justify-center items-center w-full gap-2">
                <div className="w-[20%]">
                    <Avatar src={contact.ProfilePicURL} round size="40" />
                </div>

                <div className="text-xs w-full">
                    <span className="block">{contact.Username}</span>
                    {/* <div className="text-stone-500 flex justify-between items-center">
                        <span className="block">{latestMessage}</span>
                        <div className="mr-4">
                            {timeFormat(
                                (message.receptMessages &&
                                    message.receptMessages[0]?.messages[0]
                                        ?.time) ||
                                (message.sentMessages &&
                                    message.sentMessages[0]?.messages[0]
                                        ?.time) ||
                                "0"
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <img src={camera} alt="" width={25} /> */}
            <Icon svg={ChevronRight} />
        </div>
    );
};

export default DirectMsg;
