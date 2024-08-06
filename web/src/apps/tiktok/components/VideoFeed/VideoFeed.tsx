import {useEffect, useRef} from "react";


const VideoFeed = () => {
    const feedRef = useRef<any>(null);

    const handleScroll = () => {


    };

    useEffect(() => {
        const feedElement = feedRef.current;
        feedElement.addEventListener('scroll', handleScroll);

        return () => {
            feedElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="video-feed" ref={feedRef}>
            {[1, 2, 3].map((video, index) => (
                <div key={index}>{video}</div>
            ))}
        </div>
    );
};

export default VideoFeed;
