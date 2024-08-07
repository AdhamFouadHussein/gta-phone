import {create} from "zustand";
import {VideoStoreState} from "./interfaces";

const useVideoStore = create<VideoStoreState>((set) => ({
    videos: [],
    currentVideoIndex: 0,
    setVideos: (videos) => set({ videos }),
    nextVideo: () => set((state) => ({
        currentVideoIndex: (state.currentVideoIndex + 1) % state.videos.length
    })),
    prevVideo: () => set((state) => ({
        currentVideoIndex: (state.currentVideoIndex - 1 + state.videos.length) % state.videos.length
    })),
}));

export default useVideoStore;