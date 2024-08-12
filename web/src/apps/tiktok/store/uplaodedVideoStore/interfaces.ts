interface UploadedVideo {
    videoFIle: any,
    videoUrl: any
}

export interface UploadedVideoStoreProps {
    uploadedVideo: UploadedVideo | null
    setVideo: (videos: UploadedVideo) => void;
}