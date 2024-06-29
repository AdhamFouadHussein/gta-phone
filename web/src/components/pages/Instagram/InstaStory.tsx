import React, { useEffect } from "react";
import { camera, dot, share } from "./instaSvg";
import x from "../../assets/images/x.png";
import {
    InstaStory as InstaStoryType,
    InstaUserData,
} from "../../../config/inventory";
import { motion } from "framer-motion";
import Avatar from "react-avatar";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchNui } from "../../../utils/fetchNui";

type Props = {
    selectedStory?: InstaStoryType | null;
    setSelectedStory?: (story: InstaStoryType | null) => void | undefined;
    myStory?: InstaStoryType | null;
    setMyStory?: (story: InstaStoryType | null) => void | undefined;
};

const InstaStory = ({
    selectedStory,
    setSelectedStory = () => {},
    setMyStory = () => {},
    myStory,
}: Props) => {
    const { user } = useAuth();
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
    };

    const [selectedUser, setSelectedUser] =
        React.useState<InstaUserData | null>();

    const fetchUser = (
        id: number | undefined,
        callback: (user: InstaUserData | null) => void
    ): void => {
        const handler = (event: MessageEvent) => {
            const { data } = event;
            if (data.type === "FETCH_USER") {
                window.removeEventListener("message", handler);
                callback(data.payload);
            }
        };

        window.addEventListener("message", handler);
        fetchNui("getUser", { UserID: id });
    };

    const storyUser = () => {
        if (selectedStory) {
            fetchUser(selectedStory?.UserID, (user) => {
                setSelectedUser(user);
            });
        }
    };

    const timeFormat = (timestamp: number) => {
        const currentTime = Date.now();
        const timeDiffInMilliseconds = currentTime - timestamp;
        const timeDiffInMinutes = Math.floor(
            timeDiffInMilliseconds / (1000 * 60)
        );

        if (timeDiffInMinutes < 1) {
            return "now";
        } else if (timeDiffInMinutes < 60) {
            return (
                timeDiffInMinutes +
                (timeDiffInMinutes === 1 ? "m" : "m") +
                " ago"
            );
        } else if (timeDiffInMinutes < 1440) {
            return Math.floor(timeDiffInMinutes / 60) + "h" + " ago";
        } else {
            return Math.floor(timeDiffInMinutes / 1440) + "d" + " ago";
        }
    };

    const handleCloseStory = () => {
        setSelectedStory(null);
        setMyStory(null);
    };

    useEffect(() => {
        if (selectedStory) {
            storyUser();
        }
    }, []);

    const Story = () => {
        if (selectedStory) {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-black top-[10px] left-2 w-[95%] h-[85vh] rounded-[30px] z-50">
                    <img
                        src={selectedStory.ImageURL}
                        alt=""
                        className="h-[80%] w-[100%] mt-[40px] object-contain"
                    />

                    {/* status owner details */}

                    <div className="w-full absolute top-[40px] left-0 h-12 flex justify-between items-center px-2">
                        <div className="flex justify-start items-center gap-1">
                            <Avatar
                                src={
                                    selectedUser?.ProfilePicURL ||
                                    selectedStory?.user.ProfilePicURL
                                }
                                round
                                size="35"
                            />
                            <span className="text-white text-xs">
                                {selectedUser?.Username ||
                                    selectedStory?.user.Username}
                            </span>
                            <span className="text-stone-600 text-xs">
                                {selectedStory?.Timestamp &&
                                    timeFormat(
                                        Number(selectedStory?.Timestamp)
                                    )}
                            </span>
                        </div>
                        <img
                            src={x}
                            alt=""
                            onClick={handleCloseStory}
                            className="cursor-pointer"
                        />
                    </div>

                    {/* message section */}
                    <div className="text-white h-[40px] w-full flex justify-between items-center pt-4 px-1 gap-1">
                        {/* message btn */}
                        <div
                            className="w-[75%] h-[35px] border-2 rounded-3xl flex gap-2 justify-center items-center"
                            style={{
                                borderColor: "#383838",
                            }}>
                            <span className="bg-stone-700 rounded-full p-1">
                                {camera}
                            </span>
                            <input
                                type="text"
                                placeholder="Send Message"
                                className="bg-black w-[150px]"
                                style={{ border: "none", outline: "none" }}
                                onKeyDown={(e) => handleInputKeyDown(e)}
                            />
                        </div>
                        <div className="flex w-[25%] gap-2 justify-center items-center">
                            <span className="w-[25px] h-[25px]">{share}</span>
                            <span className="w-[20px] h-[20px]">{dot}</span>
                        </div>
                    </div>
                </motion.div>
            );
        } else if (myStory) {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-black top-[10px] left-2 w-[95%] h-[85vh] rounded-[30px] z-50">
                    <img
                        src={myStory?.ImageURL}
                        alt=""
                        className="h-[80%] w-[100%] mt-[40px] object-contain"
                    />

                    {/* status owner details */}

                    <div className="w-full absolute top-[40px] left-0 h-12 flex justify-between items-center px-2">
                        <div className="flex justify-start items-center gap-1">
                            <Avatar src={user?.ProfilePicURL} round size="35" />
                            <span className="text-white text-xs">
                                {user?.Username}
                            </span>
                            <span className="text-stone-600 text-xs">
                                {myStory?.Timestamp &&
                                    timeFormat(Number(myStory?.Timestamp))}
                            </span>
                        </div>
                        <img
                            src={x}
                            alt=""
                            onClick={handleCloseStory}
                            className="cursor-pointer"
                        />
                    </div>

                    {/* message section */}
                    <div className="text-white h-[40px] w-full flex justify-between items-center pt-4 px-1 gap-1">
                        {/* message btn */}
                        <div
                            className="w-[75%] h-[35px] border-2 rounded-3xl flex gap-2 justify-center items-center"
                            style={{
                                borderColor: "#383838",
                            }}>
                            <span className="bg-stone-700 rounded-full p-1">
                                {camera}
                            </span>
                            <input
                                type="text"
                                placeholder="Send Message"
                                className="bg-black w-[150px]"
                                style={{ border: "none", outline: "none" }}
                                onKeyDown={(e) => handleInputKeyDown(e)}
                            />
                        </div>
                        <div className="flex w-[25%] gap-2 justify-center items-center">
                            <span className="w-[25px] h-[25px]">{share}</span>
                            <span className="w-[20px] h-[20px]">{dot}</span>
                        </div>
                    </div>
                </motion.div>
            );
        }
    };

    return <>{Story()}</>;
};

export default InstaStory;
