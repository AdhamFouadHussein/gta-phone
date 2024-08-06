import './style.css'
import useDrawerStore from "../../store/commentsStore/commentsStore";
import CommentsList from "./commentsList/CommentsList";
import CommentListItemProps from "./commentsList/commentListItem/CommentListItemProps";
import userAvatar from '../../../assets/icons/tiktok/comments/user-avatar.jpg'
import {useState} from "react";
import AddCommentsForm from "./addCommentsForm/AddCommentsForm";
// import {useHandleNuiMessage} from "../../../../hooks/useHandleNuiMessage ";
// import {MergedPost} from "../../../../config/inventory";
// import {fetchNui} from "../../../../utils/fetchNui";

const COMMENT_DUMMY_DATA: CommentListItemProps[] = [{
    user: {
        name: "martini_rond",
        comment: "How neatly I write the date in my book 22h",
        avatar: userAvatar,
    },
    loveCount: 255
}, {
    user: {
        name: "maxjacobson",
        comment: "Now that’s a skill very talented 22h",
        avatar: userAvatar,
    },
    loveCount: 8880
}, {
    user: {
        name: "zackjohn",
        comment: "Doing this would make me so anxious 22h",
        avatar: userAvatar,
    },
    loveCount: 50
}, {
    user: {
        name: "karennne",
        comment: "Sjpuld’ve used that on his forces 😷😷 13h",
        avatar: userAvatar,
    },
    loveCount: 38
}, {
    user: {
        name: "joshua_l",
        comment: "Doing this would make me so anxious 22h",
        avatar: userAvatar,
    },
    loveCount: 462
}, {
    user: {
        name: "kiero_d",
        comment: "No prressure 22h",
        avatar: userAvatar,
    },
    loveCount: 778
}]


export default function CommentsDrawer() {
    const [comments,setComment]=useState<CommentListItemProps[]>(COMMENT_DUMMY_DATA)
    // useHandleNuiMessage("POSTS", (payload: MergedPost[]) => { // events handler for server
    //     const parsedPosts = payload.map((post) => ({
    //         ...post,
    //         user: {
    //             ...post.user,
    //             Bio: post.user.Bio,
    //         },
    //     }));
    //
    //     setPosts(parsedPosts);
    // });

    // fetchNui("getStory", { UserID: user?.UserID });// for apis calling

    const {closeDrawer} = useDrawerStore();
    return (<div className={'comments-drawer'}>
        <div className={'comments-drawer-header'}>
            <div className={'comments-drawer-header-label'}>275 Comments</div>
            <div className={'drawer-close-icon'} onClick={() => closeDrawer()}>x</div>
        </div>
        <div>
            <CommentsList comments={comments}/>
            <AddCommentsForm/>
        </div>
    </div>)
}