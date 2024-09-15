import "./style.css";
import useDrawerStore from "../../store/commentsStore/commentsStore";
import CommentsList from "./commentsList/CommentsList";
import CommentListItemProps from "./commentsList/commentListItem/CommentListItemProps";
import userAvatar from "../../../assets/icons/tiktok/comments/user-avatar.jpg";
import { useEffect, useState } from "react";
import AddCommentsForm from "./addCommentsForm/AddCommentsForm";
import useVideoStore from "../../store/videoStore/videoStore";
import { fetchNui } from "../../../../utils/fetchNui";
import { useAuthStore } from "../../store/userStore/userStore";
// import {useHandleNuiMessage} from "../../../../hooks/useHandleNuiMessage ";
// import {MergedPost} from "../../../../config/inventory";
// import {fetchNui} from "../../../../utils/fetchNui";

const COMMENT_DUMMY_DATA: CommentListItemProps[] = [
  {
    user: {
      name: "martini_rond",
      comment: "How neatly I write the date in my book 22h",
      avatar: userAvatar,
    },
    loveCount: 255,
  },
  {
    user: {
      name: "maxjacobson",
      comment: "Now that’s a skill very talented 22h",
      avatar: userAvatar,
    },
    loveCount: 8880,
  },
  {
    user: {
      name: "zackjohn",
      comment: "Doing this would make me so anxious 22h",
      avatar: userAvatar,
    },
    loveCount: 50,
  },
  {
    user: {
      name: "karennne",
      comment: "Sjpuld’ve used that on his forces 😷😷 13h",
      avatar: userAvatar,
    },
    loveCount: 38,
  },
  {
    user: {
      name: "joshua_l",
      comment: "Doing this would make me so anxious 22h",
      avatar: userAvatar,
    },
    loveCount: 462,
  },
  {
    user: {
      name: "kiero_d",
      comment: "No prressure 22h",
      avatar: userAvatar,
    },
    loveCount: 778,
  },
];

export default function CommentsDrawer() {
  const [comments, setComment] = useState<CommentListItemProps[]>([]);
  const { currentVideoIndex, videos } = useVideoStore();
  const { user } = useAuthStore();
  useEffect(() => {
    window.addEventListener("message", handleNuiMessage);
    fetchNui("TgetComments", { PostID: videos[currentVideoIndex]?.video.id });
    return () => {
      window.removeEventListener("message", handleNuiMessage);
    };
  }, []);

  const handleNuiMessage = (event: MessageEvent) => {
    const { data } = event;
    console.log(data.type);
    console.log(data.payload);
    if (data.type == "T_COMMENTS") {
      const _comments: any[] = data.payload ?? [];
      setComment(
        _comments.map((item) => {
          return {
            user: {
              comment: item.Comment,
              name: "",
              avatar: "",
            },
            loveCount: 0,
          };
        })
      );
    }
    // setComment(data.payload);
  };

  const { closeDrawer } = useDrawerStore();
  return (
    <div className={"comments-drawer"}>
      <div className={"comments-drawer-header"}>
        <div className={"comments-drawer-header-label"}>
          {comments.length} Comments
        </div>
        <div className={"drawer-close-icon"} onClick={() => closeDrawer()}>
          x
        </div>
      </div>
      <div>
        <CommentsList comments={comments} />
        <AddCommentsForm
          handleSubmit={(value) => {
            fetchNui("TaddComment", {
              UserID: user?.id,
              PostID: videos[currentVideoIndex]?.video.id,
              Comment: value,
            });
            fetchNui("TgetComments", {
              PostID: videos[currentVideoIndex]?.video.id,
            });
          }}
        />
      </div>
    </div>
  );
}
