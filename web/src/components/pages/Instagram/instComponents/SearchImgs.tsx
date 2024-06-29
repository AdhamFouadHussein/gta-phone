import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { InstaFollows, InstaPostData } from "../../../../config/inventory";
import { useAuth } from "../../../../contexts/AuthContext";

interface Props {
    setShowPost?: React.Dispatch<
        React.SetStateAction<InstaPostData | undefined>
    >;
    allPosts?: InstaPostData[];
    width: number | string;
    height: number | string;
    follows?: InstaFollows[];
}
export default function SearchImgs({
    setShowPost,
    allPosts,
    width,
    height,
    follows,
}: Props) {
    const { user } = useAuth();
    const handleShowPost = (post: InstaPostData) => {
        if (setShowPost) {
            {
                const followedByUser = follows?.some(
                    (follow) =>
                        follow.FollowerID === user?.UserID &&
                        follow.FollowingID === post.UserID
                );
                setShowPost({
                    ...post,
                    followedByUser,
                });
            }
        }
    };

    return allPosts && allPosts.length > 0 ? (
        <ImageList
            sx={{ width: width, height: height }}
            cols={3}
            rowHeight={145}
            className="noScroll mx-auto">
            {allPosts.map((item) => (
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
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
        </ImageList>
    ) : (
        <h1 className="w-full text-center mt-10">No posts yet</h1>
    );
}
