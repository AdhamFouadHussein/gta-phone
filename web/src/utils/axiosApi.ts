// web\src\utils\axiosApi.ts

import axios from "axios";

export const imgToIbbUrl =
    "https://api.imgbb.com/1/upload?key=e871bbe818953169527e6a94caa144c5"; // Your ImgBB API URL

// function to upload image to ImgBB
export const uploadImageToImgBB = async (imageFile: File): Promise<string> => {
    try {
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await axios.post(imgToIbbUrl, formData);

        return response.data.data.url; // URL of the uploaded image
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Failed to upload image");
    }
};
