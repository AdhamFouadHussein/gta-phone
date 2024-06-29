import React from "react";
import { MergedComment, MergedPost } from "../../../../config/inventory";
import Avatar from "react-avatar";
import { fetchNui } from "../../../../utils/fetchNui";
import { useAuth } from "../../../../contexts/AuthContext";

interface Props {
    comments: MergedComment[];
    post?: MergedPost;
}
function InstaComment({ comments, post }: Props) {
    const { user } = useAuth();
    const [userComment, setUserComment] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            UserID: user?.UserID,
            PostID: post?.PostID,
            Comment: userComment,
        };

        fetchNui("addComment", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

        setUserComment("");
    };

    const hasComments = comments.some(
        (comment) => comment.PostID === post?.PostID
    );

    return (
        <div className="mt-5">
            <h1 className="text-center font-bold text-sm mb-5">Comments</h1>
            {/* comments */}
            <div className="max-h-[40vh] noScroll overflow-hidden overflow-y-auto flex flex-col justify-start items-start gap-5">
                {comments.map((comment) => {
                    return comment.PostID === post?.PostID ? (
                        <div className="flex justify-start gap-2 items-start">
                            <Avatar
                                src={comment.ProfilePicURL}
                                round
                                size="35"
                            />
                            <div className=" max-w-[15vw]">
                                <h3 className="text-xs font-bold mb-2">
                                    {comment.Username}
                                </h3>
                                <p className="text-xs font-light">
                                    {comment.Comment}
                                </p>
                            </div>
                        </div>
                    ) : null; // return null if the condition doesn't match
                })}
            </div>
            {/* if no comments */}
            {!hasComments && (
                <h1 className="text-sm text-center my-20">No comments yet</h1>
            )}
            {/* input */}
            <form className="mt-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full p-2 rounded-md text-xs bg-black border-[1px] border-stone-700"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                />
            </form>
        </div>
    );
}

export default InstaComment;
