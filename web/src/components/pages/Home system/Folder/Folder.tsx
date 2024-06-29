import snapchat from "../../../assets/images/snapchat.png";
import ex from "../../../assets/images/ex.png";
import setting from "../../../assets/images/setting.png";
import Instashot from "../../../assets/images/insta.png";
import calc from "../../../assets/images/calc.png";
import Maps from "../../../assets/images/maps.png";
import facebook from "../../../assets/images/facebook.png";
import tiktok from "../../../assets/images/tiktok.png";
import shooping from "../../../assets/images/shopping.png";
import { motion } from "framer-motion";
import { KeyboardEvent } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();

const apps = [
    {
        name: "Faces",
        icon: facebook,
        path: "/facebook",
    },
    {
        name: "TicTakTok",
        icon: tiktok,
        path: "/tiktok",
    },
    {
        name: "SnapOO",
        icon: snapchat,
        path: "/snapchat",
    },
    {
        name: "EX",
        icon: ex,
        path: "/ex",
    },
    {
        name: "Settings",
        icon: setting,
        path: "/setting",
    },
    {
        name: "Instashot",
        icon: Instashot,
        path: "/Instashot",
    },
    {
        name: "Shooping",
        icon: shooping,
        path: "/whatsApp",
    },
    {
        name: "Calculator",
        icon: calc,
        path: "/whatsApp",
    },
    {
        name: "Maps",
        icon: Maps,
        path: "/whatsApp",
    },
];

type Props = {
    openedFolder: boolean;
    setOpenedFolder: (value: boolean) => void;

    folderName: string;
    setFolderName: (value: string) => void;
};

const Folder = ({
    openedFolder,
    setOpenedFolder,
    folderName,
    setFolderName,
}: Props) => {
    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setOpenedFolder(false);
        } else {
            e.stopPropagation();
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="absolute z-30 gap-[70px] w-full top-[-53px] pt-[50px] left-0 text-white flex flex-col justify-center items-center h-screen mt-[50px]">
            <div
                className="absolute h-[88%] bg-transparent backdrop-blur-lg inset-0 z-10 text-transparent rounded-[35px]"
                style={{ backgroundColor: "while" }}
                onClick={() => setOpenedFolder(false)}>
                .
            </div>
            {openedFolder && (
                <>
                    <div className="relative text-center z-20 h-[5%] pt-4">
                        <input
                            type="text"
                            value={folderName}
                            onChange={(e) => setFolderName(e.target.value)}
                            className="text-white bg-transparent text-center text-[38px] outline-none border-none focus-within:outline-none focus-within:border-none "
                            onKeyDown={(e) => handleInputKeyDown(e)}
                        />
                    </div>
                    <div className="relative z-20 backGroundFolderNotification h-[40%] w-[75%] gap-y-3 p-5 mb-[250px] rounded-[40px] flex flex-wrap justify-between items-start">
                        {apps.map((item) => {
                            return (
                                <div
                                    key={item.icon}
                                    className="text-center w-[27%]">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full"
                                    />
                                    <p className="text-[11px] my-[2px]">
                                        {item.name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default Folder;
