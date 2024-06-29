import menu from "../../assets/images/instagram/Menu.png";
import InstaFooter from "./instComponents/InstaFooter";
import plus from "../../assets/images//instagram/Add Chat.png";
import gridImg from "../../assets/images//instagram/Grid Icon.png";
import InstaGallery from "./instComponents/InstaGallery";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileDataSlider from "./instComponents/ProfileDataSlider";
// import { Bio } from "../../../config/inventory";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchNui } from "../../../utils/fetchNui";
import { useHandleNuiMessage } from "../../../hooks/useHandleNuiMessage ";
import {
    InstaFollows,
    InstaPostData,
    InstaStory as InstaStoryType,
} from "../../../config/inventory";
import Avatar from "react-avatar";
import InstaPost from "./instComponents/InstaPost";
import Icon from "../../../config/Icon";
import { ChevronLeft } from "../../../config/svgIcons";
import { faker } from "@faker-js/faker";
import InstaStatus from "./instComponents/InstaStatus";
import InstaStory from "./InstaStory";

const InstaProfileData = () => {
    const { user } = useAuth();

    const navigate = useNavigate();

    const [follows, setFollows] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [posts, setPosts] = useState<InstaPostData[]>([]);
    const [slider, setSlider] = useState(false);
    const [showPost, setShowPost] = useState<InstaPostData | undefined>();
    const [fetchedStory, setFetchedStory] = useState<InstaStoryType | null>(
        null
    );
    const [highlightedStories, setHighlightedStories] = useState<
        InstaStoryType[]
    >([
        {
            user: {
                userName: faker.internet.userName(),
                ProfilePicURL: faker.image.avatar(),
            },
            ImageURL: faker.image.url(),
            StoryID: faker.number.int({ min: 1, max: 100 }),
            viewed: faker.datatype.boolean(),
            UserID: faker.number.int({ min: 1, max: 100 }),
            Timestamp: faker.date.recent(),
        },
        {
            user: {
                userName: faker.internet.userName(),
                ProfilePicURL: faker.image.avatar(),
            },
            ImageURL: faker.image.url(),
            StoryID: faker.number.int({ min: 1, max: 100 }),
            viewed: faker.datatype.boolean(),
            UserID: faker.number.int({ min: 1, max: 100 }),
            Timestamp: faker.date.recent(),
        },
    ]);

    const [selectedStory, setSelectedStory] = useState<InstaStoryType | null>(
        null
    );

    useHandleNuiMessage("FOLLOWS", (payload: InstaFollows[]) => {
        setFollows(payload.map((follow) => follow.FollowingID).length);
    });

    useHandleNuiMessage("FOLLOWERS", (payload: InstaFollows[]) => {
        setFollowers(
            payload.filter!((follow) => follow.FollowingID === user?.UserID)
                .length
        );
    });

    useHandleNuiMessage("OWN_POSTS", (payload: InstaPostData[]) => {
        setPosts(payload);
    });

    useHandleNuiMessage("STORY", (payload: InstaStoryType) => {
        setFetchedStory(payload);
    });

    useHandleNuiMessage("HIGHLIGHT", (payload: InstaStoryType) => {
        setHighlightedStories([...highlightedStories, payload]);
    });

    const handleGetFollows = () => {
        fetchNui("getFollows", { UserID: user?.UserID });
    };

    const handleGetFollowers = () => {
        fetchNui("getFollowers", { UserID: user?.UserID });
    };

    const handleGetOwnPosts = () => {
        fetchNui("getOwnPosts", { UserID: user?.UserID });
    };

    const handleSliderOpen = () => {
        setSlider(true);
    };

    const handleSliderCLose = () => {
        if (slider) {
            setSlider(false);
        }
    };

    const handleGetMyStory = () => {
        fetchNui("getStory", { UserID: user?.UserID });
    };

    const handleHighlightMyStory = () => {
        if (fetchedStory) {
            fetchNui("highlightStory", {
                StoryID: fetchedStory.StoryID,
                ExpiryTime: "none",
            });
        }
    };

    useEffect(() => {
        if (user?.UserID) {
            handleGetFollows();
            handleGetFollowers();
            handleGetOwnPosts();
            handleGetMyStory();
        }
    }, [user?.UserID]);

    return (
        <>
            <div className="text-white z-10 relative bg-black px-0 -top-1 left-0 w-[100%] h-[101%] rounded-[2.5vw]">
                {/* start slider menu */}
                <ProfileDataSlider slider={slider} setSlider={setSlider} />

                {/* end slider menu */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pt-12"
                    onClick={handleSliderCLose}>
                    {/* start header */}
                    <div className=" flex flex-col px-2 justify-between items-center gap-y-3">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-white "></div>
                            <span className="text-sm flex justify-center items-center gap-1 cursor-pointer">
                                {user?.FullName}
                            </span>
                            <button
                                onClick={handleSliderOpen}
                                className="text-white ">
                                <img src={menu} alt="" width={20} />
                            </button>
                        </div>
                    </div>
                    {/* end header */}

                    {/* start section 1 */}
                    <div className="mt-2 px-1">
                        <div className="flex justify-between items-center px-1">
                            <div className="rounded-full border-2 border-stone-600">
                                <Avatar
                                    src={user?.ProfilePicURL}
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
                                <span className="text-stone-300">
                                    Followers
                                </span>
                            </div>
                            <div className="flex justify-center items-center flex-col text-xs">
                                <span className="block font-bold tracking-wide">
                                    {follows}
                                </span>
                                <span className="text-stone-300">
                                    Following
                                </span>
                            </div>
                        </div>
                        {/* start user data */}
                        <div className="text-xs mt-1 ml-1">
                            <span className="block">{user?.FullName}</span>
                            <span className="block">{user?.Bio.body}</span>
                            {user?.Bio.website && (
                                <span className="block text-stone-300">
                                    {user?.Bio.website}
                                </span>
                            )}
                        </div>
                        {/* end user data */}
                        <button
                            onClick={() => navigate("/insta-EditProfile")}
                            className="w-full text-xs mx-auto mt-2 py-[2px] border-2 border-stone-800 rounded-md">
                            Edit Profile
                        </button>
                    </div>
                    {/* end section 1 */}

                    {/* start section 2 */}
                    <div className="w-full noScroll overflow-hidden overflow-x-auto flex mt-5  justify-start">
                        <div
                            className=" relative mx-2 cursor-pointer"
                            onClick={handleHighlightMyStory}>
                            <div className="relative w-10">
                                <Avatar
                                    src={fetchedStory?.ImageURL}
                                    round
                                    size="45"
                                />
                                <img
                                    src={plus}
                                    alt=""
                                    width={15}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        </div>
                        {highlightedStories.map((story) => (
                            <div className="mx-2">
                                <InstaStatus
                                    highlightStory={story}
                                    setSelectedHighlight={setSelectedStory}
                                />
                            </div>
                        ))}
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
                        </div>
                        <InstaGallery
                            width="19vw"
                            height="40vh"
                            setShowPost={setShowPost}
                            user={user}
                        />
                    </div>
                    {/* end section 3 */}
                </motion.div>
                {showPost && user && (
                    <div
                        className="absolute z-50 top-0 left-0 w-[100%] h-[100vh] rounded-[2.5vw] bg-black
                py-10">
                        <Icon
                            svg={ChevronLeft}
                            onClick={() => setShowPost(undefined)}
                            parentClassName="cursor-pointer"
                        />
                        <InstaPost
                            selectedPost={showPost}
                            postUserData={user}
                        />
                    </div>
                )}
                {/* start footer */}
                <div>
                    <InstaFooter />
                </div>
                {/* end footer */}
            </div>
            {selectedStory && (
                <InstaStory
                    selectedStory={selectedStory}
                    setSelectedStory={setSelectedStory}
                />
            )}
        </>
    );
};

export default InstaProfileData;
