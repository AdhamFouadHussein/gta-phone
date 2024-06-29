import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../../config/Icon";
import { ChevronLeft } from "../../../../config/svgIcons";
import { fetchNui } from "../../../../utils/fetchNui";
import { useAuth } from "../../../../contexts/AuthContext";
import { MergedPost } from "../../../../config/inventory";
import { useHandleNuiMessage } from "../../../../hooks/useHandleNuiMessage ";
import InstaPost from "./InstaPost";

interface Props {
    setShowSaves: React.Dispatch<React.SetStateAction<boolean>>;
}
function Saves({ setShowSaves }: Props) {
    const { user } = useAuth();

    const [savedPosts, setSavedPosts] = useState<MergedPost[]>([]);

    useHandleNuiMessage("SAVED_POSTS", (payload: MergedPost[]) => {
        const parsedPosts = payload.map((post) => ({
            ...post,
            user: {
                ...post.user,
                Bio: post.user.Bio,
            },
        }));

        setSavedPosts(parsedPosts);
    });

    const handleCloseSaves = () => {
        setShowSaves(false);
    };

    const getSavedPosts = () => {
        fetchNui("getSavedPosts", { UserID: user?.UserID });
    };

    useEffect(() => {
        if (user?.UserID) {
            getSavedPosts();
        }
    }, [user?.UserID]);

    return (
        <motion.div
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: "3rem", opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                borderBottomLeftRadius: "3vw",
                borderBottomRightRadius: "3vw",
            }}
            className="absolute w-[19vw] h-[88%] bg-black top-12 left-1/2 transform -translate-x-1/2 z-20 px-1 overflow-hidden">
            <div className="flex justify-start items-center mb-5 ">
                <Icon
                    svg={ChevronLeft}
                    parentClassName="cursor-pointer"
                    onClick={handleCloseSaves}
                />
                <h1 className="text-center w-2/3 ">Saves</h1>
            </div>
            {savedPosts.length > 0 ? (
                <>
                    <div className="flex flex-col gap-10 h-full overflow-hidden overflow-y-auto noScroll pb-52">
                        {savedPosts.map((post) => (
                            <InstaPost key={post.PostID} post={post} />
                        ))}
                    </div>
                </>
            ) : (
                <h1 className="text-center w-full">No saved posts</h1>
            )}
        </motion.div>
    );
}

export default Saves;
