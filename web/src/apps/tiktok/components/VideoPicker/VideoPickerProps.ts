export interface VideoPickerProps {
    getUploadedVideoUrl: (info: {
        videoUrl: any,
        videoFIle: any
    }) => void
}