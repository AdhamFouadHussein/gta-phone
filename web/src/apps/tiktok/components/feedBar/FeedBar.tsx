import './style.css'

export default function FeedBar() {
    return <div className={'feed-bar'}>
        <div className={'feed-bar-label'}>Following</div>
        <div>|</div>
        <div className={'feed-bar-label'}>For You</div>
    </div>
}