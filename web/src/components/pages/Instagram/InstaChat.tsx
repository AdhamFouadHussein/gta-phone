import React, { useEffect } from "react";
import { MergedInstaDM, InstaUserData } from "../../../config/inventory";
import { motion } from "framer-motion";
import Icon from "../../../config/Icon";
import {
    ChevronLeft,
    Phone,
    VideoCamera,
    Message,
} from "../../../config/svgIcons";
import Avatar from "react-avatar";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchNui } from "../../../utils/fetchNui";
import { useHandleNuiMessage } from "../../../hooks/useHandleNuiMessage ";
import SearchedProfile from "./instComponents/SearchedProfile";

type Props = {
    chat: InstaUserData;
    handleBack: () => void;
};

function InstaChat({ chat, handleBack }: Props) {
    const { user } = useAuth();

    const [messages, setMessages] = React.useState<MergedInstaDM[]>([]);
    const [message, setMessage] = React.useState("");
    const [isProfileOpened, setIsProfileOpened] =
        React.useState<InstaUserData | null>(null);

    useHandleNuiMessage("ALL_MESSAGES", (payload: MergedInstaDM[]) => {
        const parsedMessages = payload.map((message) => ({
            ...message,
            chat,
        }));

        setMessages(parsedMessages);
    });

    useHandleNuiMessage("MESSAGE", (payload: MergedInstaDM) => {
        const parsedMessage = {
            ...payload,
            chat,
        };

        const newMessages = [...messages, parsedMessage];
        setMessages(newMessages);
    });

    const handleSend = () => {
        fetchNui("sendMessage", {
            sender: user?.UserID,
            receiver: chat?.UserID,
            message: message,
        }).then(() => {
            getAllMessages();
            setMessage("");
        });
    };
    const getAllMessages = () => {
        fetchNui("getAllMessages", {
            sender: user?.UserID,
            receiver: chat.UserID,
        });
    };

    useEffect(() => {
        getAllMessages();
    }, [user?.UserID, chat.UserID]);

    const timeFormat = (timestamp: number) => {
        const currentTime = Date.now();
        const timeDiffInMilliseconds = currentTime - timestamp;
        const timeDiffInMinutes = Math.floor(
            timeDiffInMilliseconds / (1000 * 60)
        );
        const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
        const timeDiffInDays = Math.floor(timeDiffInHours / 24);

        if (timeDiffInDays >= 1) {
            return timeDiffInDays + (timeDiffInDays === 1 ? "d" : "d") + " ago";
        } else {
            return "";
        }
    };

    return (
        <>
            <div className="text-white z-50 absolute bg-black px-1 -top-1 left-0 w-[100%] h-[101%] rounded-[30px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pt-12 h-[80%]">
                    {/* Chat Header */}
                    <div className="w-full flex justify-between items-center px-1 pb-3">
                        <div className="flex justify-start items-center gap-1">
                            <Icon
                                svg={ChevronLeft}
                                parentHeight={false}
                                parentWidth={false}
                                onClick={handleBack}
                                parentClassName="cursor-pointer"
                            />
                            <div className="flex justify-start items-center gap-2  cursor-pointer" onClick={() => setIsProfileOpened(chat)}>
                                <Avatar
                                    src={chat.ProfilePicURL}
                                    round
                                    size="40"
                                />
                                <div>
                                    <p className="truncate overflow-ellipsis w-[110px]">
                                        {chat.FullName}
                                    </p>
                                    <p className="text-[#aaa] text-xs">
                                        {chat.Username}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <Icon
                                svg={Phone}
                                parentHeight={false}
                                parentWidth={false}
                                width={23}
                            />
                            <Icon
                                svg={VideoCamera}
                                parentHeight={false}
                                parentWidth={false}
                                width={23}
                            />
                        </div>
                    </div>

                    {/* Chat Body */}
                    <div className="w-full h-[70vh] pb-12 flex flex-col justify-start items-start gap-5 overflow-hidden noScroll">
                        {messages.map((msg) => {
                            if (msg.SenderID === user?.UserID) {
                                return (
                                    // Sender
                                    <div className="w-full">
                                        <div className="w-full flex flex-col justify-center items-end">
                                            {timeFormat(
                                                Number(msg.Timestamp)
                                            ) !== "" && (
                                                <div className=" w-full my-3 text-center ">
                                                    <p className="text-[#999999] text-xs">
                                                        {timeFormat(
                                                            Number(
                                                                msg.Timestamp
                                                            )
                                                        )}
                                                    </p>
                                                </div>
                                            )}
                                            <div className="w-fit max-w-[95%] h-fit bg-[#9536ec] text-left  rounded-2xl flex justify-center items-end gap-1 mt-1 py-2 px-2 overflow-hidden ">
                                                <p className="w-full pl-2 text-sm">
                                                    {msg.Message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    // Receiver
                                    <div className="w-full float-left">
                                        <div>
                                            {timeFormat(
                                                Number(msg.Timestamp)
                                            ) !== "" && (
                                                <div className="my-3">
                                                    <p className="text-[#999999] text-xs">
                                                        {timeFormat(
                                                            Number(
                                                                msg.Timestamp
                                                            )
                                                        )}
                                                    </p>
                                                </div>
                                            )}
                                            <div className="flex justify-start items-center gap-3">
                                                <Avatar
                                                    src={chat.ProfilePicURL}
                                                    round
                                                    size="30"
                                                />
                                                <div className="w-fit max-w-[95%] h-fit bg-[#262626] text-left  rounded-2xl flex justify-center items-end gap-1 mt-1 py-2 px-3 overflow-hidden ">
                                                    <p className=" text-sm text-center">
                                                        {msg.Message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>

                    {/* Message Input */}
                    <div className="w-full h-5 absolute bottom-[20px] z-50 left-0 flex justify-center items-center gap-2 px-1 ">
                        <div className="bg-[#262626] rounded-3xl p-2 w-full h-10 flex justify-center items-center gap-3 flex-1">
                            <div className="bg-[#316cee] rounded-full p-0.5 cursor-pointer">
                                <Icon
                                    svg={Message}
                                    fill="#fff"
                                    bg="transparent"
                                    width={20}
                                    height={20}
                                    onClick={handleSend}
                                />
                            </div>
                            <input
                                type="text"
                                className="bg-transparent p-1 outline-none w-full"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSend();
                                    }
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            {isProfileOpened && (
                <div className="absolute z-50 top-0 left-0  w-[100%] h-[70vh] rounded-[2.5vw]">
                <SearchedProfile
                    searchedUser={chat}
                    setSelectedAccount={setIsProfileOpened}
                />
                </div>
            )}
        </>
    );
}

export default InstaChat;
