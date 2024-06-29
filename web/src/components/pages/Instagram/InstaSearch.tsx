import React, { useEffect, useState } from "react";
import InstaFooter from "./instComponents/InstaFooter";
import { search2, shop, smallTv } from "./instaSvg";
import SearchImgs from "./instComponents/SearchImgs";
import { motion } from "framer-motion";
import {
    InstaFollows,
    InstaPostData,
    InstaUserData,
} from "../../../config/inventory";
import InstaPost from "./instComponents/InstaPost";
import { useHandleNuiMessage } from "../../../hooks/useHandleNuiMessage ";
import { fetchNui } from "../../../utils/fetchNui";
import SearchItem from "./instComponents/SearchItem";
import SearchedProfile from "./instComponents/SearchedProfile";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Icon from "../../../config/Icon";
import { ChevronLeft } from "../../../config/svgIcons";

const InstaSearch = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const [showPost, setShowPost] = useState<InstaPostData | undefined>();
    const [allPosts, setAllPosts] = useState<InstaPostData[]>([]);
    const [allUsers, setAllUsers] = useState<InstaUserData[]>([]);
    const [follows, setFollows] = useState<InstaFollows[]>([]);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<InstaUserData[]>([]);
    const [selectedAccount, setSelectedAccount] =
        useState<InstaUserData | null>(null);

    const selectedUserPost = allUsers.find(
        (user) => user.UserID === showPost?.UserID
    );

    useHandleNuiMessage("ALL_POSTS", (payload: InstaPostData[]) => {
        setAllPosts(payload);
    });

    useHandleNuiMessage("ALL_USERS", (payload: InstaUserData[]) => {
        setAllUsers(payload);
    });

    useHandleNuiMessage("FOLLOWS", (payload: InstaFollows[]) => {
        setFollows(payload);
    });

    const getAllPosts = () => {
        fetchNui("getAllPosts", {});
    };

    const getAllUsers = () => {
        fetchNui("getAllUsers", {});
    };

    const handleGetFollows = () => {
        fetchNui("getFollows", { UserID: user?.UserID });
    };
    const handleShowSearch = () => {
        setShowSearch(!showSearch);
        setShowPost(undefined);
        if (!showSearch) {
            setSearchResults([]);
            setSearchQuery("");
        }
    };

    const handleSearch = () => {
        if (searchQuery) {
            const result = allUsers.filter(
                (user) =>
                    user.Username.includes(searchQuery) ||
                    user.FullName.includes(searchQuery)
            );

            setSearchResults(result);
        }
    };

    const handleSelectAccount = (searchedUser: InstaUserData) => {
        setSelectedAccount(searchedUser);
        setShowSearch(false);
        setShowPost(undefined);
        if (searchedUser.UserID === user?.UserID) {
            navigate(`/intaProfileData`);
        }
    };

    useEffect(() => {
        getAllPosts();
        getAllUsers();
        handleGetFollows();
    }, []);

    return (
        <div className="text-white z-10 relative bg-black px-0 -top-1 left-0 w-[100%] h-[101%] rounded-[2.5vw]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-12">
                {/* Header section */}
                <div>
                    {/* search */}
                    <div className="w-full gap-1 flex justify-center items-center">
                        <div
                            className="w-[85%] h-[30px] bg-stone-950 border-2 rounded-xl flex gap-1 px-2 justify-start items-center"
                            style={{ borderColor: "#383838" }}
                            onClick={handleShowSearch}>
                            <span>{search2}</span>
                            <div className="search-container bg-black">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className="search-input"
                                    style={{ border: "none", outline: "none" }}
                                    onKeyDown={(e) => handleInputKeyDown(e)}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    value={searchQuery}
                                />
                                {searchQuery && (
                                    <button
                                        className="clear-button"
                                        onClick={() => setSearchQuery("")}>
                                        X
                                    </button>
                                )}
                            </div>
                        </div>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={26}
                                height={26}
                                viewBox="0 0 256 256">
                                <path
                                    fill="white"
                                    d="M222 40v40a6 6 0 0 1-12 0V46h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M80 210H46v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m136-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M40 86a6 6 0 0 0 6-6V46h34a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v40a6 6 0 0 0 6 6m128 96H88a14 14 0 0 1-14-14V88a14 14 0 0 1 14-14h80a14 14 0 0 1 14 14v80a14 14 0 0 1-14 14m2-94a2 2 0 0 0-2-2H88a2 2 0 0 0-2 2v80a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2Z"></path>
                            </svg>
                        </span>
                    </div>
                    {/* search fitter */}
                    <div className="w-full px-3 py-2 flex justify-between items-center">
                        <button
                            className="bg-stone-950 flex items-center gap-1 px-1 py-1 text-xs rounded-lg"
                            style={{ border: "1px solid #585858" }}>
                            <span className="block w-[15px] h-[15px]">
                                {smallTv}
                            </span>
                            IGTV
                        </button>
                        <button
                            className="bg-stone-950 flex items-center gap-1  px-1 py-1 text-xs rounded-lg"
                            style={{ border: "1px solid #585858" }}>
                            <span className="block w-[10px] h-[10px]">
                                {shop}
                            </span>
                            Shop
                        </button>
                        <button
                            className="bg-stone-950  px-2 py-1 text-xs rounded-lg"
                            style={{ border: "1px solid #585858" }}>
                            Style
                        </button>
                        <button
                            className="bg-stone-950  px-2 py-1 text-xs rounded-lg"
                            style={{ border: "1px solid #585858" }}>
                            Sports
                        </button>
                        <button
                            className="bg-stone-950 px-2 py-1 text-xs rounded-lg"
                            style={{ border: "1px solid #585858" }}>
                            Auto
                        </button>
                    </div>
                </div>

                {/* body section */}
                <SearchImgs
                    allPosts={allPosts}
                    setShowPost={setShowPost}
                    follows={follows}
                    width="19vw"
                    height="80vh"
                />

                {showPost && selectedUserPost && (
                    <div
                        className="absolute z-50 top-0 left-1/2 transform -translate-x-1/2 w-[19.1vw] h-[100vh] rounded-[2.5vw] bg-black
                    py-10">
                        <Icon
                            svg={ChevronLeft}
                            onClick={() => setShowPost(undefined)}
                            parentClassName="cursor-pointer"
                        />
                        <InstaPost
                            selectedPost={showPost}
                            postUserData={selectedUserPost}
                        />
                    </div>
                )}
            </motion.div>
            {showSearch && (
                <div className="absolute z-20 top-[11%] left-0 w-full h-[70vh] bg-black">
                    {searchResults.length > 0 &&
                        searchResults.map((item) => (
                            <SearchItem
                                key={item.UserID}
                                account={item}
                                onSelectAccount={handleSelectAccount}
                            />
                        ))}
                </div>
            )}

            {selectedAccount && (
                <div className="absolute z-50 top-0 left-0  w-[100%] h-[70vh] rounded-[2.5vw]">
                    <SearchedProfile
                        searchedUser={selectedAccount}
                        setSelectedAccount={setSelectedAccount}
                    />
                </div>
            )}

            {/* footer section*/}
            <div>
                <InstaFooter />
            </div>
        </div>
    );
};

export default InstaSearch;
