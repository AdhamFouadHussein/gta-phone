import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import { fetchNui } from "../../../../utils/fetchNui";
import { GalleryItem } from "../../../../config/inventory";
import { faker } from "@faker-js/faker";

interface Props {
    parentTop?: string;
    imageListWidth?: string;
    imageListHeight?: string;
    rowHeight?: number;
    selectedImage: GalleryItem | null;
    setSelectedImage: React.Dispatch<React.SetStateAction<GalleryItem | null>>;
}
function GalleryBox({
    imageListWidth,
    imageListHeight,
    parentTop,
    rowHeight,
    selectedImage,
    setSelectedImage,
}: Props) {
    const [list, setList] = useState<GalleryItem[]>([
        {
            image: faker.image.url(),
            id: faker.number.int(),
            citizenid: faker.string.uuid(),
            timestamp: new Date().toDateString(),
        },
        {
            image: faker.image.url(),
            id: faker.number.int(),
            citizenid: faker.string.uuid(),
            timestamp: new Date().toDateString(),
        },
        {
            image: faker.image.url(),
            id: faker.number.int(),
            citizenid: faker.string.uuid(),
            timestamp: new Date().toDateString(),
        },
        {
            image: faker.image.url(),
            id: faker.number.int(),
            citizenid: faker.string.uuid(),
            timestamp: new Date().toDateString(),
        },
    ]);

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
        <div
            className={` w-[20vw] h-full absolute z-50 left-1/2 transform -translate-x-1/2 text-white flex flex-col justify-start items-start p-[10px] overflow-hidden overflow-y-auto noScroll`}
            style={{ top: parentTop }}>
            <h6 className="w-full text-xs text-center text-slate-400">
                {list.length > 0 ? "Select an image" : "No images"}
            </h6>
            <ImageList
                sx={{ width: imageListWidth, height: imageListHeight }}
                cols={3}
                rowHeight={rowHeight}
                className="noScroll mx-auto">
                {list.map((item) => (
                    <ImageListItem
                        key={item.id}
                        className="cursor-pointer mr-0.5"
                        onClick={() => selectedImageHandler(item)}>
                        <img
                            srcSet={`${item.image}`}
                            src={`${item.image}`}
                            alt={`Gallery item ${item.id}`}
                            loading="lazy"
                            className={`border-[3px] ${
                                selectedImage?.image === item.image
                                    ? "border-blue-500"
                                    : "border-transparent"
                            }  hover:scale-[1.03] hover:border-slate-300 transition-all duration-300 ease-in-out`}
                        />
                    </ImageListItem>
                ))}
                <ImageListItem></ImageListItem>
                <ImageListItem></ImageListItem>
                <ImageListItem></ImageListItem>
            </ImageList>
        </div>
    );
}

export default GalleryBox;
