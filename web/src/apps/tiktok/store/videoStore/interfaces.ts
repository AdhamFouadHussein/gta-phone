export interface Video {
    url: string;
    id: string;
    title: string
    keywords: string[]
    description: string
}

export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Statistic {
    commentsCount: string;
    likeCounts: string;
    isILiked: boolean;
}

export interface VideoFeedItem {
    video: Video;
    user: User;
    statistic: Statistic;
}

export interface VideoStoreState {
    videos: VideoFeedItem[];
    currentVideoIndex: number;
    setVideos: (videos: VideoFeedItem[]) => void;
    nextVideo: () => void;
    prevVideo: () => void;
}