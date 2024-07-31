// components/VideoItem/VideoItem.js
import React, {useEffect} from 'react';
import './videoItem.css';

const VideoItem = ({src, isActive}: any) => {
    const videoRef = React.createRef<any>();

    useEffect(() => {
        if (isActive) {
            videoRef.current.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                '*'
            );
        } else {
            videoRef.current.contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                '*'
            );
        }
    }, [isActive]);

    return (
        <div className="video-item">
            <iframe
                ref={videoRef}
                src={`${src}?enablejsapi=1`}
                className="video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoItem;
