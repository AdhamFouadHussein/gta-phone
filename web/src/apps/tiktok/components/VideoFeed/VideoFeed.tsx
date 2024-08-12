import React, {useState, useRef, useEffect} from "react";
import useVideoStore from "../../store/videoStore/videoStore";
import './videoFeedStyle.css';

const VideoFeed: React.FC = () => {
    const {currentVideoIndex, videos, nextVideo, prevVideo} = useVideoStore();
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const currentVideo = videos[currentVideoIndex];

    const handleVideoEnd = () => {
        nextVideo();
    };

    const handleMouseDown = (event: MouseEvent) => {
        setIsDragging(true);
        setStartY(event.clientY);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging && startY !== null) {
            const deltaY = event.clientY - startY;
            if (Math.abs(deltaY) > 50) { // Adjust threshold as needed
                if (deltaY > 0) { // Drag down
                    prevVideo();
                } else { // Drag up
                    nextVideo();
                }
                // Reset dragging state after action
                setIsDragging(false);
                setStartY(null);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setStartY(null);
    };

    useEffect(() => {
        const container = document.querySelector('.video-feed') as HTMLElement;

        if (container) {
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
            }
        };
    }, [isDragging, startY]);

    return (
        <div className="video-feed">
            <video
                className={'feed-video'}
                key={currentVideo?.video.id}  // Key to force re-render
                loop
                autoPlay
                ref={videoRef}
                onEnded={handleVideoEnd} // Automatically play next video on end
            >
                <source src={currentVideo?.video.url} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoFeed;
