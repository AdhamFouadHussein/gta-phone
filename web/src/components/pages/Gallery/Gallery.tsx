import { motion } from "framer-motion";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import GalleryPhoto from "./GalleryPhoto";
import { useState, useEffect } from "react";
import { fetchNui } from "../../../utils/fetchNui";
import { GalleryItem } from "../../../config/inventory";

function Gallery() {
    const [list, setList] = useState<GalleryItem[]>([]);
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(
        null
    );

    useEffect(() => {
        window.addEventListener("message", handleNuiMessage);

        return () => {
            window.removeEventListener("message", handleNuiMessage);
        };
    }, []);

    const handleNuiMessage = (event: MessageEvent) => {
        const { data } = event;
        if (data.type === "GALLERY") {
            setList(data.payload);
        }
    };

    const handleGetGallery = () => {
        fetchNui("getGallery", {});
    };

    const selectedImageHandler = (image: GalleryItem) => {
        setSelectedImage(image);
    };

    useEffect(() => {
        handleGetGallery();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="Gallery w-[20vw] absolute top-[-50px] left-1/2 transform -translate-x-1/2 text-white flex flex-col justify-start items-start h-full mt-[50px] p-[10px] overflow-hidden rounded-[40px]">
            {/* Header */}
            <div className="absolute w-[19.1vw] h-[100px] top-[8px] left-1/2 transform -translate-x-1/2 flex justify-center items-end pb-3 bg-black/50 rounded-t-[50px]  backdrop-blur-md  z-10 ">
                <h3>Recents</h3>
            </div>
            {/* Body */}
            <div className="body h-full w-full overflow-y-scroll noScroll -z-0 rounded-[40px] bg-black">
                <ImageList
                    sx={{
                        width: list.length > 3 ? "100%" : "50%",
                        height: list.length > 3 ? "100%" : "50%",
                    }}
                    cols={3}
                    gap={1}
                    rowHeight={140}
                    className="noScroll ">
                    <ImageListItem></ImageListItem>
                    <ImageListItem></ImageListItem>
                    <ImageListItem></ImageListItem>
                    {list.map((item) => (
                        <ImageListItem
                            key={item.id}
                            className="cursor-pointer mr-0.5"
                            onClick={() => selectedImageHandler(item)}
                            sx={{ width: "100%", height: "10%" }}>
                            <img
                                srcSet={`${item.image}`}
                                src={`${item.image}`}
                                alt={`Gallery item ${item.id}`}
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </ImageListItem>
                    ))}
                    <ImageListItem></ImageListItem>
                    <ImageListItem></ImageListItem>
                    <ImageListItem></ImageListItem>
                </ImageList>
            </div>
            {/* Footer */}
            <div className="footer absolute w-[19.1vw] h-[100px] bottom-[8px] left-1/2 transform -translate-x-1/2 rounded-b-[40px] flex justify-evenly items-start pt-3 bg-black/50 backdrop-blur-md  z-10 ">
                <button className="opacity-60">Albums</button>
                <button>Recents</button>
            </div>
            {selectedImage && (
                <GalleryPhoto
                    image={selectedImage}
                    setImage={setSelectedImage}
                    handleGetGallery={handleGetGallery}
                />
            )}
        </motion.div>
    );
}

export default Gallery;
