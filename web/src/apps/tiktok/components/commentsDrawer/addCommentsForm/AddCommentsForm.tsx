import { AddCommentsFormProps } from "./AddCommentsFormProps";
import lineIcon from "../../../../assets/icons/tiktok/comments/Line.svg";
import mentionIcon from "../../../../assets/icons/tiktok/comments/Ad Sign Stroke Icon.svg";
import emojiIcon from "../../../../assets/icons/tiktok/comments/Emoji Stroke Icon.svg";
import { useState } from "react";
import HomeIndicatorBar from "../../homeIndicatorBar/HomeIndicatorBar";
import "./style.css";

export default function AddCommentsForm({
  handleSubmit,
}: AddCommentsFormProps) {
  const [commentValue, setCommentValue] = useState<string>("");

  const _handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)
    if (commentValue.trim()) {
      // Handle the form submission, e.g., send the comment to a server
      console.log("Comment submitted:", commentValue);
      handleSubmit(commentValue);
      // Clear the input field after submission
      setCommentValue("");
    }
  };

  return (
    <div className={"add-comments-form"}>
      <div className={"add-comments-input-container"}>
        <form onSubmit={_handleSubmit}>
          <input
            className={"comments-input"}
            onChange={(event) => {
              setCommentValue(event.target.value);
            }}
            value={commentValue}
            placeholder={"Add comment..."}
          />
        </form>
        <div className={"comment-icon-wrapper"}>
          <img src={mentionIcon} alt={"mention icon"} />
          <img src={emojiIcon} alt={"emoji icon"} />
        </div>
      </div>
      <div className={"add-comment-footer"}>
        <HomeIndicatorBar
          icon={lineIcon}
          styles={{
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  );
}
