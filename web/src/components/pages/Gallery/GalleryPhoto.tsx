import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../config/Icon";
import { Close, Dots } from "../../../config/svgIcons";
import ShareBox from "./ShareBox";
// import { fetchNui } from "../../../utils/fetchNui";
// import { Button } from "@mui/material";
import { GalleryItem } from "../../../config/inventory";

type Props = {
    image: GalleryItem | null;
    setImage: (image: GalleryItem | null) => void;
    handleGetGallery: () => void;
};
function GalleryPhoto({ image, setImage, handleGetGallery }: Props) {
    const [isShareBox, setIsShareBox] = useState(false);
    const handleShareBox = () => {
        setIsShareBox(!isShareBox);
    };
    // const handleDelete = async () => {
    //     try {
    //       await fetchNui("delGalleryImg", {id : image?.id});
    //       handleGetGallery();
    //       setImage(null);
    //     } catch (error) {
    //         console.error("Failed to delete image:", error);
    //     }
    //   }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[19vw] h-[96%] bg-black rounded-[35px] z-50">
            <Icon
                svg={Close}
                fill="white"
                width={18}
                height={18}
                parentHeight={false}
                parentWidth={false}
                parentClassName="absolute top-14 left-2 cursor-pointer transition-all ease-in-out duration-300 hover:opacity-80"
                onClick={() => setImage(null)}
            />

            <Icon
                svg={Dots}
                fill="white"
                width={18}
                height={18}
                parentHeight={false}
                parentWidth={false}
                parentClassName="absolute top-14 right-5 cursor-pointer transform rotate-90 transition-all ease-in-out duration-300 hover:opacity-80"
                onClick={handleShareBox}
            />

            <img
                src={image?.image}
                alt="selected"
                className="w-full h-full object-contain"
            />

            {/* Menu */}
            {isShareBox && (
                <motion.div
                    initial={{ bottom: -100, height: 0 }}
                    animate={{ bottom: 5, height: 130 }}
                    exit={{ bottom: 0, height: 0, y: 500 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[130px] absolute left-0 bottom-0 right-0 z-10 px-5 pt-2 bg-slate-900/40 backdrop-blur-3xl rounded-b-[35px] backdrop-opacity-80">
                    <ShareBox image={image} setBox={setIsShareBox} />
                </motion.div>
            )}
        </motion.div>
    );
}

export default GalleryPhoto;
