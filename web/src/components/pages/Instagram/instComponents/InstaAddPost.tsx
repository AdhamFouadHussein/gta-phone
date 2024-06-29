import React, { useEffect } from "react";
import { motion } from "framer-motion";
import GalleryBox from "./GalleryBox";
import { fetchNui } from "../../../../utils/fetchNui";
import { GalleryItem } from "../../../../config/inventory";
interface Props {
    handleClosePostData: () => void;
    formData: {
        post: {
            ImageURL: string;
            Caption: string;
            Location: string;
        };
        user: {
            UserID: number | undefined;
        };
    };
    setFormData: React.Dispatch<
        React.SetStateAction<{
            post: {
                ImageURL: string;
                Caption: string;
                Location: string;
            };
            user: {
                UserID: number | undefined;
            };
        }>
    >;
    setSelectedImage: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
    selectedImage: GalleryItem | null;
}
function InstaAddPost({
    handleClosePostData,
    formData,
    setFormData,
    setSelectedImage,
    selectedImage,
}: Props) {
    const handlePostInputChange = (
        event:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        const [type, key] = name.split(".");
        setFormData((prevState) => ({
            ...prevState,
            [type as "post" | "user"]: {
                ...prevState[type as "post" | "user"],
                [key]: value,
            },
        }));
    };

    // Add post
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !formData.post.ImageURL ||
            !formData.post.Caption ||
            !formData.post.Location
        ) {
            alert("Please fill in all fields");
        }

        fetchNui("addPost", formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

        console.log("formData", formData);

        handleClosePostData();
    };

    useEffect(() => {
        if (selectedImage) {
            setFormData((prevState) => ({
                ...prevState,
                post: {
                    ...prevState.post,
                    ImageURL: selectedImage.image,
                },
            }));
        }
    }, [selectedImage, setFormData]);

    return (
        <motion.div
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: "3rem", opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                borderBottomLeftRadius: "3vw",
                borderBottomRightRadius: "3vw",
            }}
            className="absolute w-[95%] h-[88%] bg-black top-12 left-1/2 transform -translate-x-1/2 z-20 px-1 overflow-hidden">
            <form onSubmit={handleSubmit}>
                {/* Header */}
                <div className="w-full flex justify-between items-center text-blue-500">
                    <button onClick={handleClosePostData}>Cancel</button>
                    <button type="submit">Post</button>
                </div>

                {/* Text Input for Location */}
                <input
                    type="text"
                    placeholder="Location"
                    name="post.Location"
                    className="w-full bg-black mt-5"
                    value={formData.post?.Location}
                    onChange={handlePostInputChange}
                />

                {/* Textarea Input for Caption */}
                <textarea
                    cols={37}
                    rows={5}
                    name="post.Caption"
                    value={formData.post?.Caption}
                    placeholder="Caption"
                    className="w-full bg-black mt-10"
                    onChange={handlePostInputChange}></textarea>

                <GalleryBox
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    parentTop="35vh"
                    rowHeight={100}
                    imageListHeight="40vh"
                />
            </form>
        </motion.div>
    );
}

export default InstaAddPost;
