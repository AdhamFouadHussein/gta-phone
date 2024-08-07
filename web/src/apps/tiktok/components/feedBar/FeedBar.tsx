import './style.css'
import {useNavigate} from "react-router-dom";

export default function FeedBar({selectedTab}: {
    selectedTab: "following" | "forYou"
}) {
    const navigator = useNavigate()
    return <div className={'feed-bar'}>
        <div onClick={()=>navigator(`/tiktok/following`)} className={`feed-bar-label ${selectedTab == "following" ? "select-feed-tab" : ""}`}>Following</div>
        <div>|</div>
        <div onClick={()=>navigator(`/tiktok/forYou`)} className={`feed-bar-label ${selectedTab == "forYou" ? "select-feed-tab" : ""}`}>For You</div>
    </div>
}