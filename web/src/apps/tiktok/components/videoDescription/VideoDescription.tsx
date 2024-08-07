import {VideoDescriptionProps} from "./videoDescriptionProps";
import './style.css'

export default function VideoDescription({
                                             userName,
                                             video
                                         }: VideoDescriptionProps) {

    return (<div className={'video-meta-data-container'}>
        <div className={'video-user-name'}>@{userName}</div>
        <div className={'video-key-words-list'}>
            {video && video?.keywords.map((keyword, index) => {
                return (<div className={'video-key-word'} key={index}>
                    {keyword}
                </div>)
            })}
        </div>
        <div className={'video-description'}>{video?.description}</div>
    </div>)
}