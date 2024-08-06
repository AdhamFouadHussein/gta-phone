import {AddCommentsFormProps} from "./AddCommentsFormProps";
import lineIcon from '../../../../assets/icons/tiktok/comments/Line.svg'
import mentionIcon from '../../../../assets/icons/tiktok/comments/Ad Sign Stroke Icon.svg'
import emojiIcon from '../../../../assets/icons/tiktok/comments/Emoji Stroke Icon.svg'
import {useState} from "react";
import HomeIndicatorBar from "../../homeIndicatorBar/HomeIndicatorBar";
import './style.css'

export default function AddCommentsForm({}: AddCommentsFormProps) {
    const [commentValue, setCommentValue] = useState<string>()
    return <div className={'add-comments-form'}>
        <div className={'add-comments-input-container'}>
            <form>
                <input
                    className={"comments-input"}
                    onChange={(event) => {
                        setCommentValue(event.target.value)
                    }}
                    value={commentValue}
                    placeholder={"Add comment..."}/>
            </form>
            <div className={'comment-icon-wrapper'}>
                <img src={mentionIcon} alt={"icon"}/>
                <img src={emojiIcon} alt={"icon"}/>
            </div>
        </div>
        <div className={'add-comment-footer'}>
            <HomeIndicatorBar
                icon={lineIcon}
                styles={{
                    backgroundColor: "white"
                }}/>
        </div>
    </div>
}