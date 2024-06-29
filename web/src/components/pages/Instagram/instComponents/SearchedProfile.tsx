import { useEffect, useState } from "react";
import {
    InstaFollows,
    InstaPostData,
    InstaUserData,
} from "../../../../config/inventory";
import { useHandleNuiMessage } from "../../../../hooks/useHandleNuiMessage ";
import { fetchNui } from "../../../../utils/fetchNui";
import { motion } from "framer-motion";
import Avatar from "react-avatar";
import InstaProfilImg from "./InstaProfilImg";
import InstaPost from "./InstaPost";
import InstaGallery from "./InstaGallery";
import oval from "../../../assets/images//instagram/Oval.png";
import oval2 from "../../../assets/images//instagram/Oval (1).png";
import oval3 from "../../../assets/images//instagram/Oval (2).png";
import gridImg from "../../../assets/images//instagram/Grid Icon.png";
import tagIcon from "../../../assets/images//instagram/Tags Icon.png";
import Icon from "../../../../config/Icon";
import { ChevronLeft } from "../../../../config/svgIcons";
import { useAuth } from "../../../../contexts/AuthContext";

interface Props {
    searchedUser: InstaUserData;
    setSelectedAccount: React.Dispatch<
        React.SetStateAction<InstaUserData | null>
    >;
}
function SearchedProfile({ searchedUser, setSelectedAccount }: Props) {
    const { user } = useAuth();
    const [followers, setFollowers] = useState(0);
    const [posts, setPosts] = useState<InstaPostData[]>([]);
    const [showPost, setShowPost] = useState<InstaPostData | undefined>();
    const [follows, setFollows] = useState<InstaFollows[]>([]);
    const [followedByUser, setFollowedByUser] = useState<boolean>(false);

    useHandleNuiMessage("FOLLOWS", (payload: InstaFollows[]) => {
        setFollows(payload);
    });

    useHandleNuiMessage("FOLLOWERS", (payload: InstaFollows[]) => {
        setFollowers(
            payload.filter!(
                (follow) => follow.FollowingID === searchedUser?.UserID
            ).length
        );
        setFollowedByUser(
            payload.some(
                (follow) =>
                    follow.FollowerID === user?.UserID &&
                    follow.FollowingID === searchedUser?.UserID
            )
        );
    });

    useHandleNuiMessage("OWN_POSTS", (payload: InstaPostData[]) => {
        setPosts(payload);
    });

    const handleGetFollows = () => {
        fetchNui("getFollows", { UserID: searchedUser?.UserID });
    };

    const handleGetFollowers = () => {
        fetchNui("getFollowers", { UserID: searchedUser?.UserID });
    };

    const handleGetOwnPosts = () => {
        fetchNui("getOwnPosts", { UserID: searchedUser?.UserID });
    };

    const handleFollow = async () => {
        try {
            if (!followedByUser) {
                await fetchNui("followUser", {
                    FollowerID: user?.UserID ?? 0,
                    FollowingID: searchedUser?.UserID ?? 0,
                });
                setFollows([
                    ...follows,
                    {
                        FollowerID: user?.UserID,
                        FollowingID: searchedUser?.UserID,
                    },
                ]);
                setFollowedByUser(true);
            } else {
                await fetchNui("unfollowUser", {
                    FollowerID: user?.UserID ?? 0,
                    FollowingID: searchedUser?.UserID ?? 0,
                });
                setFollows(
                    follows.filter(
                        (follow) =>
                            !(
                                follow.FollowerID === user?.UserID &&
                                follow.FollowingID === searchedUser?.UserID
                            )
                    )
                );
                setFollowedByUser(false);
                handleGetFollows();
            }
        } catch (error) {
            console.error("Error updating follow status:", error);
        } finally {
            handleGetFollows();
        }
    };

    useEffect(() => {
        handleGetFollowers();
    }, [followedByUser]);

    useEffect(() => {
        if (searchedUser?.UserID) {
            handleGetFollows();
            handleGetFollowers();
            handleGetOwnPosts();
        }
    }, [searchedUser?.UserID]);

    return (
        <div className="text-white z-10 relative bg-black px-0 -top-1 left-0 w-[100%] h-[101%] rounded-[2.5vw]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-12">
                {/* start header */}
                <div className=" flex px-2 justify-start items-center gap-y-3">
                    <Icon
                        svg={ChevronLeft}
                        bg="transparent"
                        fill="white"
                        parentHeight={false}
                        parentWidth={false}
                        parentClassName="cursor-pointer"
                        onClick={() => setSelectedAccount(null)}
                    />
                    <h1 className="text-sm">{searchedUser?.FullName}</h1>
                </div>
                {/* end header */}

                {/* start section 1 */}
                <div className="mt-2 px-1">
                    <div className="flex justify-between items-center px-1">
                        <div className="rounded-full border-2 border-stone-600">
                            <Avatar
                                src={searchedUser?.ProfilePicURL}
                                round
                                size="50"
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col text-xs">
                            <span className="block font-bold tracking-wide">
                                {posts.length}
                            </span>
                            <span className="text-stone-300">Posts</span>
                        </div>
                        <div className="flex justify-center items-center flex-col text-xs">
                            <span className="block font-bold tracking-wide">
                                {followers}
                            </span>
                            <span className="text-stone-300">Followers</span>
                        </div>
                        <div className="flex justify-center items-center flex-col text-xs">
                            <span className="block font-bold tracking-wide">
                                {follows.length}
                            </span>
                            <span className="text-stone-300">Following</span>
                        </div>
                    </div>
                    {/* start user data */}
                    <div className="text-xs mt-1 ml-1">
                        <span className="block">{searchedUser?.FullName}</span>
                        <span className="block">{searchedUser?.Bio.body}</span>
                        {searchedUser?.Bio.website && (
                            <span className="block text-stone-300">
                                {searchedUser?.Bio.website}
                            </span>
                        )}
                    </div>
                    {/* end user data */}

                    {/* start buttons */}
                    <div className="flex justify-between items-center mt-3 text-sm">
                        {/* Start Follow */}
                        <button
                            className={`w-full border mr-5 ${
                                followedByUser
                                    ? "text-red-500"
                                    : "text-green-400"
                            }`}
                            onClick={handleFollow}>
                            {followedByUser ? "UnFollow" : "Follow"}
                        </button>
                        <button className="w-full border ">Message</button>
                        {/* End Follow */}
                    </div>
                    {/* end buttons */}
                </div>
                {/* end section 1 */}

                {/* start section 2 */}
                <div className="w-full noScroll overflow-hidden overflow-x-auto flex mt-5  justify-start">
                    <div className="mx-3">
                        <InstaProfilImg
                            img={oval}
                            border="border-2 border-stone-600"
                            padding="p-[2px]"
                            name="Friends"
                        />
                    </div>
                    <div className="mx-3">
                        <InstaProfilImg
                            img={oval2}
                            border="border-2 border-stone-600"
                            padding="p-[2px]"
                            name="Sport"
                        />
                    </div>
                    <div className="mx-3">
                        <InstaProfilImg
                            img={oval3}
                            border="border-2 border-stone-600"
                            padding="p-[2px]"
                            name="Design"
                        />
                    </div>
                    <div className="mx-3">
                        <InstaProfilImg
                            img={oval}
                            border="border-2 border-stone-600"
                            padding="p-[2px]"
                            name="Friends"
                        />
                    </div>
                    <div className="mx-3">
                        <InstaProfilImg
                            img={oval2}
                            border="border-2 border-stone-600"
                            padding="p-[2px]"
                            name="Sport"
                        />
                    </div>
                    <div className="mx-3">
                        <InstaProfilImg
                            img={oval3}
                            border="border-2 border-stone-600"
                            padding="p-[2px]"
                            name="Design"
                        />
                    </div>
                </div>
                {/* end section 2 */}

                {/* start section 3 */}
                <div className="mt-4">
                    <div className="flex justify-center items-center">
                        <div className="w-full py-1 border-b-2 border-stone-400">
                            <img
                                src={gridImg}
                                alt=""
                                width={22}
                                className="mx-auto"
                            />
                        </div>
                        <div className="w-full py-1 ">
                            <img
                                src={tagIcon}
                                alt=""
                                width={22}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                    <InstaGallery
                        width="19vw"
                        height="40vh"
                        setShowPost={setShowPost}
                        user={searchedUser}
                        followedByUser={followedByUser}
                    />
                </div>
                {/* end section 3 */}
            </motion.div>
            {showPost && searchedUser && (
                <div className="absolute z-20 top-[11%] left-0 w-full h-[70vh] bg-black">
                    <InstaPost selectedPost={showPost} postUserData={searchedUser} />
                </div>
            )}
        </div>
    );
}
export default SearchedProfile;
