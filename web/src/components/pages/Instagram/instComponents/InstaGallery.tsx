import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useHandleNuiMessage } from "../../../../hooks/useHandleNuiMessage ";
import {
    InstaPostData,
    InstaUserData,
} from "../../../../config/inventory";
import { fetchNui } from "../../../../utils/fetchNui";

type Props = {
    width: number | string;
    height: number | string;
    setShowPost?: React.Dispatch<
        React.SetStateAction<InstaPostData | undefined>
    >;
    user: InstaUserData | null;
    followedByUser?:boolean
};

export default function InstaGallery({
    width,
    height,
    setShowPost,
    user,
    followedByUser,
}: Props) {
    const [ownPosts, setOwnPosts] = React.useState<InstaPostData[]>([]);

    useHandleNuiMessage("OWN_POSTS", (payload: InstaPostData[]) => {
        setOwnPosts(payload);
    });

    const getOwnPosts = () => {
        fetchNui("getOwnPosts", { UserID: user?.UserID });
    };

    const handleShowPost = (post: InstaPostData) => {
        if (setShowPost) {
            {
                setShowPost({
                    ...post,
                    followedByUser,
                });
            }
        }
    };

    React.useEffect(() => {
        if (user?.UserID) {
            getOwnPosts();
        }
    }, [user?.UserID]);

    return ownPosts.length > 0 ? (
        <ImageList
            sx={{ width: width, height: height }}
            cols={3}
            rowHeight={145}
            className="noScroll mx-auto">
            {ownPosts.map((item) => (
                <ImageListItem
                    key={item.PostID}
                    onClick={() => handleShowPost(item)}
                    className="cursor-pointer">
                    <img
                        srcSet={`${item.ImageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.ImageURL}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.Caption}
                        loading="lazy"
                        className="hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    ) : (
        <h1 className="w-full text-center mt-10">No posts yet</h1>
    );
}
