import Close from "../../assets/images/Close.png";
import AirDrop from "../../assets/images/AirDrop.png";
import insta from "../../assets/images/insta.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";
import ex from "../../assets/images/ex.png";
import copy from "../../assets/images/copy.png";
import download from "../../assets/images/download.png";
// import { fetchNui } from "../../../utils/fetchNui";
import { GalleryItem } from "../../../config/inventory";

const apps = [
    {
        id: 1,
        name: "AirDrop",
        icon: AirDrop,
    },
    {
        id: 2,
        name: "Instashot",
        icon: insta,
    },
    {
        id: 3,
        name: "TickTacTok",
        icon: tiktok,
    },
    {
        id: 4,
        name: "Snapshot",
        icon: snapchat,
    },
    {
        id: 5,
        name: "Ex",
        icon: ex,
    },
];
interface ShareBoxProps {
    image: GalleryItem | null;
    setBox: React.Dispatch<React.SetStateAction<boolean>>;
}
const ShareBox: React.FC<ShareBoxProps> = ({ image, setBox }) => {
    const handleClose = () => {
        setBox(false);
    };

    return (
        <div className="absolute w-full h-[400px] bottom-0 left-0 bg-[#1c1c1e] p-5 rounded-3xl">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <img
                        src={image?.image}
                        alt="shareBox"
                        className="w-[2vw] h-[2vw]"
                    />
                    <div className="flex flex-col justify-center items-start ">
                        <h3>Image</h3>
                        <p className="text-xs opacity-50">Gallery</p>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={handleClose}>
                    <img src={Close} alt="Close" />
                </div>
            </div>
            <div className="w-full flex justify-between items-center mt-7">
                {apps.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col justify-center items-center gap-1 cursor-pointer hover:brightness-75 transition-all duration-300 ease-in-out">
                        <div>
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-[2vw] h-[2vw] "
                            />
                        </div>
                        <p className="text-xs">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-col justify-center bg-[#2c2c2e] mt-7 rounded-2xl">
                <div className="flex justify-between items-center text-sm bg-[#2c2c2e] hover:brightness-75 p-3 cursor-pointer transition-all duration-300 ease-in-out">
                    <h3>Copy</h3>
                    <img
                        src={copy}
                        alt="copy"
                        className="w-[15px] h-[15px] object-contain"
                    />
                </div>
                <div className="flex justify-between items-center text-sm bg-[#2c2c2e] hover:brightness-75 p-3 cursor-pointer transition-all duration-300 ease-in-out">
                    <h3>Download</h3>
                    <img
                        src={download}
                        alt="download"
                        className="w-[15px] h-[15px] object-contain"
                    />
                </div>
            </div>
            <button className="text-[#007aff]  mt-5">Edit Actions...</button>
        </div>
    );
};

export default ShareBox;
