import React from "react";
import './videoFeedStyle.css';
import useVideoStore from "../../store/videoStore/videoStore";

const VideoFeed: React.FC = () => {
    const {currentVideoIndex, videos, nextVideo} = useVideoStore();


    const currentVideo = videos[currentVideoIndex];

    return (
        <div className="video-feed">
            <video
                className={'feed-video'}
                key={currentVideo?.video.id}  // Key to force re-render
                loop
                autoPlay
                onEnded={nextVideo} // Automatically play next video on end
            >
                <source src={currentVideo?.video.url} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoFeed;
