import React from "react";
import "./insta.css";
import logo from "../../assets/images/InstagramLogo.png";
import { camera, tv } from "./instaSvg";
import InstaFooter from "./instComponents/InstaFooter";
import InstaPost from "./instComponents/InstaPost";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import messenger from "../../assets/images/instagram/Messanger.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {
    GalleryItem,
    InstaStory as InstaStoryType,
    MergedPost,
} from "../../../config/inventory";
import InstaStory from "./InstaStory";
import InstaStatus from "./instComponents/InstaStatus";
import { fetchNui } from "../../../utils/fetchNui";
import { useHandleNuiMessage } from "../../../hooks/useHandleNuiMessage ";
import Avatar from "react-avatar";
import InstaAddPost from "./instComponents/InstaAddPost";
import GalleryBox from "./instComponents/GalleryBox";
import { faker } from "@faker-js/faker";

const InstaHome = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [postData, setPostData] = useState(false);
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(
        null
    );
    const [formData, setFormData] = useState({
        post: {
            ImageURL: selectedImage?.image || "",
            Caption: "",
            Location: "",
        },
        user: {
            UserID: user?.UserID,
        },
    });

    const [posts, setPosts] = useState<MergedPost[]>([
        {
            PostID: faker.number.int({ min: 1, max: 100 }),
            Timestamp: new Date(Date.now()),
            UserID: faker.number.int({ min: 1, max: 100 }),
            ImageURL: faker.image.url(),
            Caption: faker.lorem.paragraph(),
            Location: faker.location.country(),
            user: {
                UserID: faker.number.int({ min: 1, max: 100 }),
                Username: faker.internet.userName(),
                Bio: {
                    body: faker.lorem.paragraph(),
                    website: faker.internet.url(),
                },
                Email: faker.internet.email(),
                FullName: faker.person.fullName(),
                ProfilePicURL: faker.image.avatar(),
            },
        },
    ]);

    const [selectedStory, setSelectedStory] = useState<InstaStoryType | null>(
        null
    );
    
    const [stories, setStories] = useState<InstaStoryType[]>([]);


    const [myStory, setMyStory] = useState<InstaStoryType | null>(null);
    const [uploadedStory, setUploadedStory] = useState<InstaStoryType | null>(
        null
    );

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    useHandleNuiMessage("POSTS", (payload: MergedPost[]) => {
        const parsedPosts = payload.map((post) => ({
            ...post,
            user: {
                ...post.user,
                Bio: post.user.Bio,
            },
        }));

        setPosts(parsedPosts);
    });

    useHandleNuiMessage("STORIES", (payload: InstaStoryType[]) => {
        // Merge the payload with existing stories from local storage to maintain viewed status
        const storedStories: InstaStoryType[] = JSON.parse(
            localStorage.getItem("instaStories") || "[]"
        );
        const mergedStories = payload.map((story) => {
            const storedStory = storedStories.find(
                (s) => s.StoryID === story.StoryID
            );
            return storedStory
                ? { ...story, viewed: storedStory.viewed }
                : story;
        });

        // Save the merged stories to local storage
        localStorage.setItem("instaStories", JSON.stringify(mergedStories));

        // Update the instaStories state with the new payload
        setStories(mergedStories);
    });

    useHandleNuiMessage("STORY", (payload: InstaStoryType) => {
        setUploadedStory(payload);
    });

    const handleGetPosts = async () => {
        try {
            fetchNui("getPosts", { UserID: user?.UserID });
            alert("get following posts of logged in user " + user?.Username);
            fetchNui("showFrame", {});
        } catch (error) {
            console.error("Failed to get posts:", error);
        }
    };

    const handleClosePostData = () => {
        setPostData(false);
        setSelectedImage(null);
        setFormData({
            post: {
                ImageURL: "",
                Caption: "",
                Location: "",
            },
            user: {
                UserID: user?.UserID,
            },
        });
    };

    const handleOpenPostData = () => {
        setPostData(!postData);
        setSelectedImage(null);
        setFormData({
            post: {
                ImageURL: "",
                Caption: "",
                Location: "",
            },
            user: {
                UserID: user?.UserID,
            },
        });
    };

    // **********************************Stories**********************************
    const handleGetStories = () => {
        fetchNui("getStories", { UserID: user?.UserID });
    };

    const handleGetMyStory = () => {
        fetchNui("getStory", { UserID: user?.UserID });

    };

    const handleOpenMyStory = () => {
        if (uploadedStory) {
            // If myStory is already open, close the GalleryBox
            setMyStory(uploadedStory);
            setIsGalleryOpen(false);
            console.log("myStory is exist", JSON.stringify(myStory));
        } else {
            // If myStory is not open, open the GalleryBox to select an image
            setIsGalleryOpen(true);
        }
    };

    useEffect(() => {
        const handleUploadMyStory = () => {
            if (selectedImage) {
                const data: InstaStoryType = {
                    UserID: user?.UserID,
                    ImageURL: selectedImage?.image,
                };

                fetchNui("addStory", data)
                    .then(() => {
                        // If story is successfully uploaded, update myStory state
                        setMyStory(data);
                        setUploadedStory(data);
                        setIsGalleryOpen(false); // Close the GalleryBox
                        setSelectedImage(null);
                        console.warn("myStory is added" + JSON.stringify(data));
                    })
                    .catch((error) => {
                        console.error("Failed to upload story:", error);
                        // Handle error scenario (e.g., display error message)
                    });
            }
        };
        if (isGalleryOpen && selectedImage) {
            handleUploadMyStory();
            console.log("handleUploadMyStory is triggered");
        }
    }, [isGalleryOpen, selectedImage, user?.UserID]);

    // useEffect for posts
    useEffect(() => {
        if (user?.UserID) {
            handleGetPosts();
        }
    }, [user?.UserID]);

    // useEffect for stories
    useEffect(() => {
        if (stories) {
            handleGetStories();
        }
    }, []);

    useEffect(() => {
        handleGetMyStory();
    }, [myStory]);

    return (
        <div className=" text-white bg-black w-[100%] h-[101%] rounded-[2.5vw] mb-[900px] noScroll overflow-y-scroll">
            {/* Add New Post Data Form */}
            {postData && (
                <InstaAddPost
                    handleClosePostData={handleClosePostData}
                    formData={formData}
                    setFormData={setFormData}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            )}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>
                {/* start header */}
                <div
                    style={{
                        borderTopLeftRadius: "3vw",
                        borderTopRightRadius: "3vw",
                    }}
                    className="bg-stone-950 absolute z-10 top-2 rounded-t-[30px] left-2 w-[94%] h-[13%] flex justify-between px-2 items-end">
                    <div className="flex justify-between items-center w-full pb-2">
                        <div onClick={() => navigate("/InstaCamera")}>
                            {camera}
                        </div>
                        <img
                            src={logo}
                            alt=""
                            className="w-[30%] h-[30%] ml-6"
                        />
                        <div className="flex justify-between items-center gap-2">
                            <Link to={""} className="tv relative">
                                {tv}
                            </Link>
                            <Link
                                to={"/instaDirectedMsg"}
                                className="w-[30px] h-[30px] pt-2">
                                <img src={messenger} alt="User Profile" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* end header */}
                {/* start Body */}
                <div className="relative mt-[10vh] rounded-[30px] ">
                    {/* start status */}
                    <div className="relative flex overflow-scroll bg-black noScroll pl-1">
                        <div
                            className="flex cursor-pointer flex-col bg-black justify-center items-center"
                            onClick={handleOpenMyStory}>
                            <div className=" statusBg w-[50px] h-[50px] p-[2px] rounded-[40px] flex justify-center items-center ">
                                <Avatar
                                    src={user?.ProfilePicURL}
                                    round
                                    size="50"
                                />
                            </div>
                            <div className="text-center text-ellipsis whitespace-nowrap overflow-hidden w-[55px]">
                                <span className="text-[10px]">Your Story</span>
                            </div>
                        </div>
                        {stories.map((story) => (
                            <InstaStatus
                                setSelectedStory={setSelectedStory}
                                story={story}
                                setStories={setStories}
                            />
                        ))}
                    </div>
                    {/* end status */}
                    {/* start post */}
                    <div className="px-1 bg-black">
                        {posts.map((post) => (
                            <div key={post.PostID} className="mt-3 ">
                                <InstaPost post={post} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* end post */}
                {/* End Body */}
                <div className="h-[150px] mt-4"></div>

                {posts.length === 0 && (
                    <div className="h-[150px] text-center mt-4">No Postes</div>
                )}
            </motion.div>
            {/* start footer  */}
            <div>
                <InstaFooter
                    handleClosePostData={handleClosePostData}
                    handleOpenPostData={handleOpenPostData}
                    postData={postData}
                />
            </div>
            {/* end footer  */}

            {isGalleryOpen && (
                <div className="absolute w-[95%] h-[88%] bg-black top-12 left-1/2 transform -translate-x-1/2 z-20 px-1 overflow-hidden">
                    <GalleryBox
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                    />
                </div>
            )}

            {/* opened story */}
            {(selectedStory || myStory) && (
                <InstaStory
                    selectedStory={selectedStory}
                    setSelectedStory={setSelectedStory}
                    myStory={myStory}
                    setMyStory={setMyStory}
                />
            )}
        </div>
    );
};

export default InstaHome;
