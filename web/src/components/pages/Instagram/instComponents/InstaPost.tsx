import { useEffect, useState } from "react";
import messenger from "../../../assets/images/instagram/Messanger.png";
import { dot, save, saved, heartWhite, heartRed } from "../instaSvg";
import Carousel from "./Carousel";
import { fetchNui } from "../../../../utils/fetchNui";
import {
    InstaFollows,
    InstaLikes,
    InstaSaves,
    MergedPost,
    InstaUserData,
    InstaComment as InstaCommentType,
    MergedComment,
    InstaPostData,
} from "../../../../config/inventory";
import { useHandleNuiMessage } from "../../../../hooks/useHandleNuiMessage ";
import { useAuth } from "../../../../contexts/AuthContext";

import {
    Comment,
    Favorite,
    Heart,
    InstaHeartOutlined,
} from "../../../../config/svgIcons";
import Icon from "../../../../config/Icon";
import { motion } from "framer-motion";
import InstaComment from "./InstaComment";
import SearchedProfile from "./SearchedProfile";

type Props = {
    post?: MergedPost;
    selectedPost?: InstaPostData;
    postUserData?: InstaUserData | null;
};

const InstaPost = ({ post, postUserData, selectedPost }: Props) => {
    const { user } = useAuth();
    const [likes, setLikes] = useState<InstaLikes[]>([]);
    const [postLikes, setPostLikes] = useState<InstaLikes[]>([]);
    const [likedByUser, setLikedByUser] = useState<boolean>(false);

    const [saves, setSaves] = useState<InstaSaves[]>([]);
    const [savedByUser, setSavedByUser] = useState<boolean>(false);

    const [follows, setFollows] = useState<InstaFollows[]>([]);
    const [followedByUser, setFollowedByUser] = useState<boolean>(false);

    const [isShowComment, setIsShowComment] = useState<boolean>(false);
    const [mergedComments, setMergedComments] = useState<MergedComment[]>([]);

    const [isProfileOpened, setIsProfileOpened] =
        useState<InstaUserData | null>(null);

    useEffect(() => {
        if (post?.UserID) {
            handleGetLike();
            handleGetSave();
            handleGetFollow();
            handleGetComments();
        }
    }, [post?.UserID]);

    useHandleNuiMessage("LIKES", (payload: InstaLikes[]) => {
        setLikes((likes) => {
            const newLikes = payload.filter(
                (newLike) =>
                    !likes.some(
                        (like) =>
                            like.UserID === newLike.UserID &&
                            like.PostID === newLike.PostID
                    )
            );
            return [...likes, ...newLikes];
        });
        setLikedByUser(
            payload.some(
                (like) =>
                    like.UserID === user?.UserID && like.PostID === post?.PostID
            )
        );
        setPostLikes((postLikes) => {
            const newPostLikes = likes.filter(
                (newLike) =>
                    newLike?.PostID === post?.PostID &&
                    newLike?.UserID !== user?.UserID &&
                    !postLikes.some(
                        (like) =>
                            like.UserID === newLike.UserID &&
                            like.PostID === newLike.PostID
                    )
            );
            return [...postLikes, ...newPostLikes];
        });
    });

    useHandleNuiMessage("SAVED_POSTS", (payload: InstaSaves[]) => {
        setSaves(payload);
        setSavedByUser(
            payload.some(
                (save) =>
                    save.UserID === user?.UserID && save.PostID === post?.PostID
            )
        );
    });

    useHandleNuiMessage("FOLLOWS", (payload: InstaFollows[]) => {
        setFollows(payload);
        setFollowedByUser(
            payload.some(
                (follow) =>
                    follow.FollowerID === user?.UserID &&
                    follow.FollowingID === post?.UserID
            )
        );
    });

    useHandleNuiMessage("COMMENTS", async (payload: InstaCommentType[]) => {
        setMergedComments([]);
        const commentUserIds = payload.map((comment) => comment.UserID);
        try {
            const users = await fetchUsers(commentUserIds); // Await fetchUsers
            const mergedComments = payload.map((comment) => {
                const user = users.find(
                    (user) => user.UserID === comment.UserID
                );
                return { ...comment, ...user } as MergedComment;
            });
            setMergedComments(mergedComments);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    });

    const fetchUsers = async (userIds: number[]) => {
        const users: InstaUserData[] = [];
        for (const userId of userIds) {
            await fetchUser(userId, (user) => {
                if (user) {
                    users.push(user);
                }
            });
        }
        return users;
    };

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

    const handleLike = async () => {
        try {
            if (!likedByUser) {
                await fetchNui("likePost", {
                    UserID: user?.UserID ?? 0,
                    PostID: post?.PostID ?? 0,
                });

                setLikedByUser(true); // Update likedByUser immediately after liking
            } else {
                await fetchNui("unlikePost", {
                    UserID: user?.UserID ?? 0,
                    PostID: post?.PostID ?? 0,
                });

                setLikedByUser(false); // Update likedByUser immediately after unliking
            }
        } catch (error) {
            console.error("Error updating like status:", error);
        } finally {
            handleGetLike();
        }
    };

    const handleSave = async () => {
        try {
            if (!savedByUser) {
                await fetchNui("savePost", {
                    UserID: user?.UserID ?? 0,
                    PostID: post?.PostID ?? 0,
                });
                setSaves([
                    ...saves,
                    { UserID: user?.UserID, PostID: post?.PostID },
                ]);
                setSavedByUser(true); // Update savedByUser immediately after saving
            } else {
                await fetchNui("unsavePost", {
                    UserID: user?.UserID ?? 0,
                    PostID: post?.PostID ?? 0,
                });
                setSaves(
                    saves.filter(
                        (save) =>
                            !(
                                save.UserID === user?.UserID &&
                                save.PostID === post?.PostID
                            )
                    )
                );
                setSavedByUser(false); // Update savedByUser immediately after unSaving
            }
        } catch (error) {
            console.error("Error updating save status:", error);
        } finally {
            handleGetSave();
        }
    };

    const handleFollow = async () => {
        try {
            if (!followedByUser) {
                await fetchNui("followUser", {
                    FollowerID: user?.UserID ?? 0,
                    FollowingID: post?.UserID ?? 0,
                });
                setFollows([
                    ...follows,
                    { FollowerID: user?.UserID, FollowingID: post?.UserID },
                ]);
                setFollowedByUser(true);
            } else {
                await fetchNui("unfollowUser", {
                    FollowerID: user?.UserID ?? 0,
                    FollowingID: post?.UserID ?? 0,
                });
                setFollows(
                    follows.filter(
                        (follow) =>
                            !(
                                follow.FollowerID === user?.UserID &&
                                follow.FollowingID === post?.UserID
                            )
                    )
                );
                setFollowedByUser(false);
            }
        } catch (error) {
            console.error("Error updating follow status:", error);
        } finally {
            handleGetFollow();
        }
    };

    const handleGetLike = async () => {
        fetchNui("getLikes", { PostID: post?.PostID });
    };

    const handleGetSave = async () => {
        fetchNui("getSavedPosts", { UserID: user?.UserID });
    };

    const handleGetFollow = async () => {
        fetchNui("getFollows", { UserID: user?.UserID });
    };

    const handleGetComments = async () => {
        try {
            const response = (await fetchNui("getComments", {
                PostID: post?.PostID ?? 0,
            })) as Response;
            const data = await response.json();
            setMergedComments(data.payload);
        } catch (error) {
            console.error("Error getting comments:", error);
        }
    };

    // *************COMMENTS*************

    const handleCommentPanel = () => {
        setIsShowComment(!isShowComment);
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

    return (
        <>
            {postUserData && selectedPost ? (
                <div className="flex relative bg-black flex-col">
                    {/* start header */}
                    <div className="flex justify-between items-center">
                        <div
                            className="flex justify-start items-center gap-2 cursor-pointer"
                            onClick={() => setIsProfileOpened(postUserData)}>
                            <img
                                src={postUserData?.ProfilePicURL}
                                alt=""
                                className="w-[17%] rounded-full object-contain"
                            />
                            <div className="text-[10px]">
                                <span className="block">
                                    {postUserData?.Username}
                                </span>
                                <span className="text-xs text-zinc-400">
                                    {selectedPost?.Location}
                                </span>
                            </div>
                        </div>
                        <div className="w-1/2 text-end mr-2 ">
                            <p className="text-xs w-full ">
                                {selectedPost &&
                                    timeFormat(Number(selectedPost.Timestamp))}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            {postUserData.UserID !== user?.UserID && (
                                <div
                                    className="rounded-md text-[10px] tracking-wider px-2 py-1 border-2 border-zinc-700 cursor-pointer"
                                    onClick={handleFollow}>
                                    {selectedPost?.followedByUser
                                        ? "Following"
                                        : "Follow"}
                                </div>
                            )}
                            <div className="h-[23px] w-[23px]">{dot}</div>
                        </div>
                    </div>
                    {/* end header */}

                    {/* start Carousel */}
                    <div className="mt-3 h-[230px]">
                        <Carousel image={selectedPost?.ImageURL} />
                    </div>
                    {/* end Carousel */}
                    {/* start footer */}
                    <div className="mt-2 ">
                        <div className=" flex justify-between items-center">
                            <div className="flex justify-between items-center gap-2">
                                <div
                                    className="h-[30px] w-[30px]"
                                    onClick={handleLike}>
                                    {likedByUser ? heartRed : heartWhite}
                                </div>
                                <div className="h-[22px] w-[22px]">
                                    <Icon
                                        svg={Comment}
                                        width={22}
                                        height={22}
                                        parentWidth={false}
                                        parentHeight={false}
                                        parentClassName="cursor-pointer transform -scale-x-[1]"
                                        onClick={handleCommentPanel}
                                    />
                                </div>
                                <div className="h-[29px] w-[29px] pt-[6px]">
                                    <img src={messenger} alt="" />
                                </div>
                            </div>
                            <div
                                className="w-[24px] h-[24px]"
                                onClick={handleSave}>
                                {savedByUser ? saved : save}
                            </div>
                        </div>
                        {postLikes.length > 0 || likedByUser ? (
                            <p className="text-[12px] px-1">
                                Liked by{" "}
                                {likedByUser
                                    ? `you ${
                                          postLikes.length > 0 ? "and " : ""
                                      }`
                                    : " "}
                                {postLikes.length > 0 && (
                                    <span className="font-bold">
                                        {postLikes.length}
                                    </span>
                                )}
                                {postLikes.length > 0
                                    ? ` other${postLikes.length > 1 ? "s" : ""}`
                                    : ""}
                            </p>
                        ) : null}
                        <div className="text-[12px] px-1 mt-1 tracking-wide">
                            <span className="font-bold">
                                {postUserData?.Username}{" "}
                            </span>
                            {selectedPost?.Caption}
                        </div>
                    </div>
                    {/* end footer */}
                </div>
            ) : (
                <div className="flex relative bg-black flex-col">
                    {/* start header */}
                    <div className="flex justify-between items-center">
                        <div
                            className="flex justify-start items-center gap-2  cursor-pointer"
                            onClick={() =>
                                setIsProfileOpened(post?.user || null)
                            }>
                            <img
                                src={post?.user.ProfilePicURL}
                                alt=""
                                className="w-[17%] rounded-full object-contain"
                            />
                            <div className="text-[10px]">
                                <span className="block">
                                    {post?.user.Username}
                                </span>
                                <span className="text-xs text-zinc-400">
                                    {post?.Location}
                                </span>
                            </div>
                        </div>
                        <div className="w-1/2 text-end mr-2">
                            <p className="text-xs w-full text-slate-500">
                                {post && timeFormat(Number(post.Timestamp))}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <div
                                className={`rounded-md text-[10px] tracking-wider px-2 py-1 border-2 border-zinc-700 ${
                                    followedByUser
                                        ? "bg-transparent text-white"
                                        : "bg-white text-black"
                                } hover:opacity-70 transition-all delay-300 ease-in-out cursor-pointer`}
                                onClick={handleFollow}>
                                {followedByUser ? "Following" : "Follow"}
                            </div>
                            <div className="h-[23px] w-[23px]">{dot}</div>
                        </div>
                    </div>
                    {/* end header */}

                    {/* start Carousel */}
                    <div className="mt-3 h-[230px]">
                        <Carousel image={post?.ImageURL} />
                    </div>
                    {/* end Carousel */}
                    {/* start footer */}
                    <div className="mt-2 ">
                        <div className=" flex justify-between items-center">
                            <div className="flex justify-between items-center gap-2">
                                <div
                                    className="h-[30px] w-[30px] cursor-pointer hover:opacity-70 transition-all delay-300 ease-in-out"
                                    onClick={handleLike}>
                                    {likedByUser ? (
                                        <Icon
                                            svg={Heart}
                                            fill="red"
                                            parentWidth={false}
                                            width={23}
                                            height={20}
                                        />
                                    ) : (
                                        <Icon
                                            svg={InstaHeartOutlined}
                                            fill="transparent"
                                            parentWidth={false}
                                            width={23}
                                            height={20}
                                        />
                                    )}
                                </div>
                                <div className="h-[22px] w-[22px]">
                                    <Icon
                                        svg={Comment}
                                        width={20}
                                        height={20}
                                        parentWidth={false}
                                        parentHeight={false}
                                        parentClassName="cursor-pointer transform -scale-x-[1]"
                                        onClick={handleCommentPanel}
                                    />
                                </div>
                                <div className="h-[29px] w-[29px] pt-[6px]  cursor-pointer hover:opacity-70 transition-all delay-300 ease-in-out">
                                    <img src={messenger} alt="" />
                                </div>
                            </div>
                            <div
                                className="w-[24px] h-[24px] cursor-pointer hover:opacity-70 transition-all delay-300 ease-in-out"
                                onClick={handleSave}>
                                {
                                    <Icon
                                        svg={Favorite}
                                        fill={
                                            savedByUser
                                                ? "white"
                                                : "transparent"
                                        }
                                        parentHeight={false}
                                        parentWidth={false}
                                        height={20}
                                        width={23}
                                    />
                                }
                            </div>
                        </div>
                        {postLikes.length > 0 || likedByUser ? (
                            <p className="text-[12px] px-1">
                                Liked by{" "}
                                {likedByUser
                                    ? `you ${
                                          postLikes.length > 0 ? "and " : ""
                                      }`
                                    : " "}
                                {postLikes.length > 0 && (
                                    <span className="font-bold">
                                        {postLikes.length}
                                    </span>
                                )}
                                {postLikes.length > 0
                                    ? ` other${postLikes.length > 1 ? "s" : ""}`
                                    : ""}
                            </p>
                        ) : null}
                        <div className="text-[12px] px-1 mt-1 tracking-wide">
                            <span className="font-bold">
                                {post?.user.Username}{" "}
                            </span>
                            {post?.Caption}
                        </div>
                    </div>
                    {/* end footer */}
                </div>
            )}

            {isShowComment && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 100 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    <InstaComment comments={mergedComments} post={post} />
                </motion.div>
            )}

            {isProfileOpened && post?.user && (
                <div className="absolute z-50 top-0 left-0  w-[100%] h-[70vh] rounded-[2.5vw]">
                    <SearchedProfile
                        searchedUser={post?.user}
                        setSelectedAccount={setIsProfileOpened}
                    />
                </div>
            )}
            
            {isProfileOpened && postUserData && (
                <div className="absolute z-50 top-0 left-0  w-[100%] h-[70vh] rounded-[2.5vw]">
                    <SearchedProfile
                        searchedUser={postUserData}
                        setSelectedAccount={setIsProfileOpened}
                    />
                </div>
            )}
        </>
    );
};

export default InstaPost;
