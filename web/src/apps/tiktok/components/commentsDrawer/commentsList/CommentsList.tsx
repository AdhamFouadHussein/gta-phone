import CommentsListProps from "./CommentsListProps";
import CommentListItem from "./commentListItem/CommentListItem";
import './style.css'




export default function CommentsList({comments}: CommentsListProps) {
    return (<div className={'comments-list'}>
        {comments.map((comment, index) => {
            return <CommentListItem key={index} user={comment.user} loveCount={comment.loveCount}/>;
        })}
    </div>)
}