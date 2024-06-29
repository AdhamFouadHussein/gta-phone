import React, { useEffect, useState } from "react";
import { backArrow } from "./instaSvg";
import addImg from "../../assets/images/instagram/Add Chat.png";
import search from "../../assets/images/instagram/search.png";
import blueCamera from "../../assets/images/instagram/blueCamera.png";
import DirectMsg from "./instComponents/DirectMsg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { InstaFollows, InstaUserData } from "../../../config/inventory";
import InstaChat from "./InstaChat";
import HomeBar from "../../components/ui/HomeBar/HomeBar";
import { useAuth } from "../../../contexts/AuthContext";
import { useHandleNuiMessage } from "../../../hooks/useHandleNuiMessage ";
import { fetchNui } from "../../../utils/fetchNui";
const InstaDirectedMsg = () => {
    const { user } = useAuth();

    const [selectedUser, setSelectedUser] = useState<InstaUserData | null>(
        null
    );
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<InstaUserData[]>([]);

    const [allUsers, setAllUsers] = useState<InstaUserData[]>([]);
    const [follows, setFollows] = useState<InstaFollows[]>([]);
    const followingUsers = follows.map((follow) => follow.FollowingID);

    const followedUsers = allUsers.filter((filteredUser) =>
        followingUsers.includes(filteredUser.UserID)
    );

    useHandleNuiMessage("ALL_USERS", (payload: InstaUserData[]) => {
        setAllUsers(payload);
    });

    useHandleNuiMessage("FOLLOWS", (payload: InstaFollows[]) => {
        setFollows(payload);
    });

    // // Sort messages based on time
    // const sortedMessages = directMsgDB.slice().sort((a, b) => {
    //     const aTime =
    //         (a.receptMessages &&
    //             a.receptMessages[0] &&
    //             a.receptMessages[0]?.messages &&
    //             a.receptMessages[0]?.messages[0]?.time) ||
    //         (a.sentMessages &&
    //             a.sentMessages[0] &&
    //             a.sentMessages[0]?.messages &&
    //             a.sentMessages[0]?.messages[0]?.time) ||
    //         "0";
    //     const bTime =
    //         (b.receptMessages &&
    //             b.receptMessages[0] &&
    //             b.receptMessages[0]?.messages &&
    //             b.receptMessages[0]?.messages[0]?.time) ||
    //         (b.sentMessages &&
    //             b.sentMessages[0] &&
    //             b.sentMessages[0]?.messages &&
    //             b.sentMessages[0]?.messages[0]?.time) ||
    //         "0";

    //     const aMinutes = parseInt(aTime);
    //     const bMinutes = parseInt(bTime);

    //     if (aMinutes >= 60 && bMinutes >= 60) {
    //         // If both times are greater than or equal to 60 minutes, sort normally
    //         return aMinutes - bMinutes;
    //     } else if (aMinutes < 60 && bMinutes < 60) {
    //         // If both times are less than 60 minutes, sort normally
    //         return aMinutes - bMinutes;
    //     } else if (aMinutes >= 60 && bMinutes < 60) {
    //         // If only a is greater than or equal to 60 minutes, a goes after b
    //         return 1;
    //     } else {
    //         // If only b is greater than or equal to 60 minutes, a goes before b
    //         return -1;
    //     }
    // });

    const handleGetAllUsers = () => {
        fetchNui("getAllUsers", {});
    };

    const handleGetFollows = () => {
        fetchNui("getFollows", { UserID: user?.UserID });
    };

    const handleSelectedUSer = (user: InstaUserData) => {
        setSelectedUser(user);
    };

    const handleBack = () => {
        setSelectedUser(null);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const result = followedUsers.filter(
            (user) =>
                user.Username.includes(searchQuery) ||
                user.FullName.includes(searchQuery)
        );

        setSearchResults(result);
    }, [searchQuery, followedUsers]);

    useEffect(() => {
        handleGetAllUsers();
        handleGetFollows();
    }, []);

    return (
        <div className="text-white z-10 relative bg-black px-1 -top-1 left-0 w-[100%] h-[101%] rounded-[30px]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-12 h-[80%]">
                {/* Header Section */}
                <div className="flex flex-col justify-between items-center gap-y-3">
                    <div className="w-full flex justify-between items-center">
                        <Link to={"/InstaHome"} className="text-white ">
                            {backArrow}
                        </Link>
                        <span className="text-sm flex justify-center items-center gap-1 cursor-pointer">
                            {user?.Username}
                        </span>
                        <button className="text-white ">
                            <img src={addImg} alt="" className="" />
                        </button>
                    </div>
                    <div
                        className="w-[100%] h-[25px] bg-stone-800 border-2 rounded-lg flex gap-1 justify-start items-center"
                        style={{ borderColor: "#383838" }}>
                        <span className="pl-2 w-[20px]">
                            <img src={search} alt="" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[150px] bg-transparent text-white placeholder-stone-500"
                            style={{ border: "none", outline: "none" }}
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                {/* Body Section */}
                <div className="h-full overflow-y-scroll noScroll">
                    {searchQuery === "" ? (
                        followedUsers.length > 0 ? (
                            followedUsers.map((user) => (
                                <DirectMsg
                                    key={user.UserID}
                                    contact={user}
                                    onClick={() => handleSelectedUSer(user)}
                                />
                            ))
                        ) : (
                            <h1 className="text-center mt-3 text-[#b9b9b9]">
                                No Users
                            </h1>
                        )
                    ) : searchResults.length > 0 ? (
                        searchResults.map((user) => (
                            <DirectMsg
                                key={user.UserID}
                                contact={user}
                                onClick={() => handleSelectedUSer(user)}
                            />
                        ))
                    ) : (
                        <h1 className="text-center mt-3 text-[#b9b9b9]">
                            No Results Found
                        </h1>
                    )}
                </div>

                <Link
                    to={"/InstaCamera"}
                    className="flex justify-center items-center gap-2 cursor-pointer pt-1">
                    <div>
                        <img src={blueCamera} alt="" width={20} />
                    </div>
                    <span className="text-xs text-sky-500">Camera</span>
                </Link>
                {selectedUser && (
                    <InstaChat chat={selectedUser} handleBack={handleBack} />
                )}
                <HomeBar bottom="12px" />
            </motion.div>
        </div>
    );
};

export default InstaDirectedMsg;
