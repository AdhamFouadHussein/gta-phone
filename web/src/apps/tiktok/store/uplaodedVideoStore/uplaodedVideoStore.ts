import {create} from "zustand";
import {UploadedVideoStoreProps} from "./interfaces";

const useUploadedVideoStore = create<UploadedVideoStoreProps>((set) => ({
    uploadedVideo: null,
    setVideo: (uploadedVideo) => set({uploadedVideo})
}));

export default useUploadedVideoStore;
