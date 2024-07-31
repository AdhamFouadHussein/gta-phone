import MainLayout from "../../components/mainLayout/MainLayout";
import FeedBar from "../../components/feedBar/FeedBar";
import FloatingActionButton from "../../components/floatingActionButton/FloatingActionButton";
import {getActionBarButtons} from "../../components/floatingActionButton/items";
// import {getBackgroundImageStyle} from "../helpers/getBackgroundImageStyle";
import '../style.css'
// import backgroundImage from './Background.svg'
import VideoFeed from "../../components/VideoFeed/VideoFeed";


export default function HomePage() {
    return (<MainLayout
        mode={"dark"}
        footer
        styles={{}}>
        <FeedBar/>
        <FloatingActionButton
            buttons={getActionBarButtons({
                likeCount: "328.7K",
                messageCount: "578"
            })}/>
        <VideoFeed/>
    </MainLayout>)

}