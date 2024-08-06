import CommentListItemProps from "./CommentListItemProps";
import loveIcon from '../../../../../assets/icons/tiktok/comments/Heart Stroke Icon.svg'
import './style.css'

export default function CommentListItem({
                                            user: {
                                                comment,
                                                name,
                                                avatar
                                            }, loveCount
                                        }: CommentListItemProps) {
    return (<div className="comment-list-item">
        <div className={'comment-user'}>
            <div className={"user-avatar"}>
                <img height={32} width={32} src={avatar} alt={"user-avatar"}/>
            </div>
            <div>
                <div className={'user-name'}>
                    {name}
                </div>
                <div className={'user-comment'}>
                    {comment}
                </div>
            </div>
        </div>
        <div className={'comment-love-count'}>
            <img src={loveIcon} alt={"love-count"}/>
            <div>{loveCount}</div>
        </div>
    </div>)
}