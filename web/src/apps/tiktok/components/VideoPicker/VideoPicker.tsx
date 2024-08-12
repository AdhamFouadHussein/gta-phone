import React, {useRef} from 'react';
import galleryIcon from '../../../assets/icons/tiktok/video/uploadIcon.svg';
import './videoPicker.css'
import {VideoPickerProps} from "./VideoPickerProps";

const VideoPicker = ({getUploadedVideoUrl}: VideoPickerProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            getUploadedVideoUrl({
                videoFIle: file,
                videoUrl: videoURL
            });
        }
    };

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div>
            {/* Hidden file input */}
            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{display: 'none'}}  // Hide the input
            />
            {/* Image that triggers the file input */}
            <img
                className={'galleryIcon-icon'}
                width={32}
                height={32}
                src={galleryIcon}
                onClick={handleImageClick}
                alt="Upload Video"
            />
            <div style={{
                fontSize: 12
            }}>upload</div>
        </div>
    );
};

export default VideoPicker;
