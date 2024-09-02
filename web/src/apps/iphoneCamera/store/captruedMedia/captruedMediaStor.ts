import {create} from "zustand";

// Define the types for the store
interface MediaStore {
    imagePreview: string | null;
    videoPreview: string | null;
    setImagePreview: (image: any) => void;
    setVideoPreview: (video: any) => void;
    clearPreviews: () => void;
  }

// Define the store
export const useMediaStore = create<MediaStore>((set) => ({
  imagePreview: null, // To store the preview of the uploaded image
  videoPreview: null, // To store the preview of the uploaded video

  // Action to set the image preview
  setImagePreview: (image: any) => set({ imagePreview: image }),

  // Action to set the video preview
  setVideoPreview: (video: any) => set({ videoPreview: video }),

  // Action to clear the previews
  clearPreviews: () => set({ imagePreview: null, videoPreview: null }),
}));
