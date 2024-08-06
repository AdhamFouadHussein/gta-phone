import React, {useState} from 'react';

const VideoPicker = () => {
    const [videoSrc, setVideoSrc] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleFileChange}/>
            {
                videoSrc && (
                    <video controls width="600">
                        <source src={videoSrc} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                )}
        </div>
    );
};

export default VideoPicker;
