import React, { useEffect } from "react";
import search from "../../assets/images/search.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import snapchat from "../../assets/images/snapchat.png";
import ex from "../../assets/images/ex.png";
import maps from "../../assets/images/maps.png";
import Instashot from "../../assets/images/insta.png";
import shopping from "../../assets/images/shopping.png";
import whatsApp from "../../assets/images/whatsApp.png";
import searchActive from "../../assets/images/search-active.png";
import Arcade from "../../assets/images/arcade.png";
import Apps from "../../assets/images/apps.png";
import Games from "../../assets/images/games.png";
import Today from "../../assets/images/today.png";
import appDetails from "../../assets/images/appDetails.png";
import { useState } from "react";
import AppDetails from "./AppDetails";
import "./AppStore.css";
import { motion } from "framer-motion";
import { App } from "../../../config/inventory";
import { useAuth } from "../../../contexts/AuthContext";
import { fetchNui } from "../../../utils/fetchNui";
// import App from "../../App";

export const Loading = () => (
    <svg
        width="20"
        height="20"
        fill="currentColor"
        className="mr-2 animate-spin"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
    </svg>
);

const footer = [
    {
        icon: searchActive,
        name: "Search",
        path: "/appstore",
    },
    {
        icon: Arcade,
        name: "Arcade",
        path: "/appstore/arcade",
    },
    {
        icon: Apps,
        name: "App",
        path: "/appstore/app",
    },
    {
        icon: Games,
        name: "Games",
        path: "/appstore/games",
    },
    {
        icon: Today,
        name: "Today",
        path: "/appstore/today",
    },
];

const AppStore: React.FC = () => {
    const { user, isLoggedIn } = useAuth();
    const [downloading, setDownloading] = useState<number | null>(null);

    // add your logic heeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeeeee ya Adhooooooooooooooooom

    const [appList, setAppList] = useState<App[]>([
        {
            id: 1,
            name: "InstaBackshots",
            description: "Company name",
            downloads: 8794562,
            icon: Instashot,
            path: isLoggedIn && user ? "/InstaHome" : "/loginIntsa",
            installed: false,
            rate: 5,
            image: appDetails,
        },
        {
            id: 2,
            name: "ChatBro",
            description: "Company name",
            downloads: 78562358,
            icon: whatsApp,
            path: "/whatsApp",
            installed: false,
            rate: 3,
            image: appDetails,
        },
        {
            id: 3,
            name: "Faces",
            description: "Company name",
            downloads: 1452851,
            icon: facebook,
            path: "/facebook",
            installed: false,
            rate: 4,
            image: appDetails,
        },
        {
            id: 4,
            name: "TicTakTok",
            description: "Company name",
            downloads: 7236,
            icon: tiktok,
            path: "/tiktok",
            installed: false,
            rate: 5,
            image: appDetails,
        },
        {
            id: 5,
            name: "EX",
            description: "Company name",
            downloads: 6541,
            icon: ex,
            path: "/ex",
            installed: false,
            rate: 2,
            image: appDetails,
        },
        {
            id: 6,
            name: "Maps",
            description: "Company name",
            downloads: 234,
            icon: maps,
            path: "/maps",
            installed: true,
            rate: 5,
            image: appDetails,
        },
        {
            id: 7,
            name: "SnapOO",
            description: "Company name",
            downloads: 145541298,
            icon: snapchat,
            path: "/snapchat",
            installed: true,
            rate: 4,
            image: appDetails,
        },
        {
            id: 8,
            name: "Shopping",
            description: "Company name",
            downloads: 234,
            icon: shopping,
            path: "/shopping",
            installed: true,
            rate: 3,
            image: appDetails,
        },
    ]);

    useEffect(() => {
        fetchNui('appstore', {action: 'getApps'}).then((data: unknown) => {  
            console.log(data);
            let jsonData;
            if (typeof data === 'string') {
                try {
                    jsonData = JSON.parse(data);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    return;
                }
            } else {
                jsonData = data;
            }
    
            if (Array.isArray(jsonData)) {
                const appData = jsonData as App[];
                setAppList(appData);
            } else {
                console.error("Invalid data:", jsonData);
            }
        }).catch(error => {
            console.error("An error occurred:", error);
        });
    }, []);
    const [selectedApp, setSelectedApp] = useState<App>(appList[0]);
    const [openApp, setOpenApp] = useState(false);
    const [Uninstall, setUninstall] = useState(true);
    const [appaState, setAppaState] = useState<App[]>([]);

    const formatDownloads = (downloads: number) => {
        if (downloads >= 1000000) {
            return `${(downloads / 1000000).toFixed(1)}M`;
        } else if (downloads >= 1000) {
            return `${(downloads / 1000).toFixed(1)}k`;
        } else {
            return `${downloads}`;
        }
    };

    const saveAppToLocalStorage = (appId: number) => {
        const clickedApp = appList.find((app) => app.id === appId);

        if (clickedApp) {
            const savedApps: App[] = JSON.parse(
                localStorage.getItem("savedApps") || "[]"
            );
            if (!savedApps.some((app) => app.id === clickedApp.id)) {
                const data: App = {
                    id: clickedApp.id,
                    description: clickedApp.description,
                    downloads: clickedApp.downloads,
                    icon: clickedApp.icon,
                    name: clickedApp.name,
                    path: clickedApp.path,
                    installed: true,
                    rate: clickedApp.rate,
                    image: clickedApp.image,
                };
                savedApps.push(data);
                localStorage.setItem("savedApps", JSON.stringify(savedApps));
            }
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("savedApps")) {
            localStorage.setItem("savedApps", JSON.stringify([]));
        }
    }, []);

    const handleDownload = (appName: string, appId: number) => {
        setDownloading(appId);
        setTimeout(() => {
            const updatedAppList = appList.map((app) =>
                app.name === appName ? { ...app, installed: true } : app
            );
            setAppList(updatedAppList);
            saveAppToLocalStorage(appId);
            setDownloading(null);
            setUninstall(false);
        }, 3000);
    };

    const handleSelectedApp = (id: number) => {
        const app = appList.find((app) => app.id === id);
        setSelectedApp(app || appList[0]);
        setOpenApp(true);
    };

    useEffect(() => {
      
        let savedAppsData;
 
        if (savedAppsData) {
            const data: App[] = JSON.parse(savedAppsData);
            setAppaState(data);
            // setUninstall(false);
        } else {
            // If no savedAppsData is found in localStorage, set an empty array
            setAppaState([]);
            setUninstall(true);
        }
    }, [appaState]);

    const handleUninstall = (appId: number) => {
        // Remove the app from local storage
        const updatedSavedApps = appaState.filter((app) => app.id !== appId);
        localStorage.setItem("savedApps", JSON.stringify(updatedSavedApps));

        // Update the app state
        setAppaState(updatedSavedApps);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="relative text-white bg-black flex flex-col justify-start items-start h-full p-1 overflow-hidden rounded-[30px]">
            {/* Header */}
            <div className="flex justify-between items-center w-full gap-2 mt-[40px]">
                <div className="w-full relative">
                    <input
                        type="text"
                        className="w-full bg-[#131314] rounded-[8px] h-[36px] px-10 text-sm"
                        placeholder="App name"
                    />
                    <img
                        src={search}
                        alt="search_icon"
                        className="absolute top-[30%] left-3"
                    />
                </div>
                <button className="text-[#3478f6] hover:opacity-80 transition-all duration-300 ease-in-out text-sm">
                    Cancel
                </button>
            </div>

            {/* Apps */}
            <div className="appStore-apps flex flex-col justify-between items-start h-[85%] w-full bg-[#131314] my-5 py-3 px-3 overflow-hidden overflow-y-auto noScroll">
                {appList.map((app) => (
                    <div
                        key={app.id}
                        className="flex justify-start items-center gap-3 w-full h-fit cursor-pointer border border-transparent hover:border hover:border-gray-200 transition-all ease-in-out duration-300">
                        <img
                            className="icon w-[15%]"
                            src={app.icon}
                            alt={app.name}
                        />
                        <div className="flex justify-between items-center w-full">
                            <div
                                className="app-details flex flex-col justify-start items-start cursor-pointer border border-transparent hover:border hover:border-gray-200 transition-all ease-in-out duration-300"
                                onClick={() => handleSelectedApp(app.id)}>
                                <h3 className="mt-1 -mb-1 text-sm">
                                    {app.name}
                                </h3>
                                <p className="text-[11px] text-[#8d8f93]">
                                    {app.description}
                                </p>
                                <div className="flex justify-between items-center w-full gap-1">
                                    <div className="flex justify-start gap-[2px] items-center">
                                        {Array.from({ length: 5 }).map(
                                            (_, index) => (
                                                <i
                                                    key={index}
                                                    className="block fa-solid fa-star text-[10px] text-[#908f94]"></i>
                                            )
                                        )}
                                    </div>
                                    <span className="block text-[10px] text-[#8d8f93] text-right w-full pr-3">
                                        {app.downloads &&
                                            formatDownloads(app.downloads)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center w-full gap-2">
                                <div
                                    className="z-50 bg-[#202021] cursor-pointer px-5 rounded-[20px] border border-transparent hover:opacity-80 hover:border hover:border-gray-100 transition-all duration-300 ease-in-out"
                                    onClick={() =>
                                        !app.installed &&
                                        app.name &&
                                        handleDownload(app.name, app.id)
                                    }>
                                    <a
                                        href={
                                            app.installed ? app.path : undefined
                                        }
                                        className="text-[#3478f6] hover:opacity-80 transition-all duration-300 ease-in-out text-xs">
                                        {appaState.find(
                                            (appstate) => appstate.id === app.id
                                        ) ? (
                                            "OPEN"
                                        ) : downloading === app.id ? (
                                            <Loading />
                                        ) : (
                                            "GET"
                                        )}
                                    </a>
                                </div>
                                {appaState.find(
                                    (appstate) => appstate.id === app.id
                                ) && (
                                    <div
                                        className="z-50 bg-[#202021] cursor-pointer px-5 rounded-[20px] border border-transparent hover:opacity-80 hover:border hover:border-gray-100 transition-all duration-300 ease-in-out"
                                        onClick={() => handleUninstall(app.id)}>
                                        <a className="text-[#f04343] hover:opacity-80 transition-all duration-300 ease-in-out text-xs">
                                            {downloading === app.id ? (
                                                <Loading />
                                            ) : (
                                                "Delete"
                                            )}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="w-full flex flex-row-reverse justify-between items-center px-5">
                {footer.map((app, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center gap-1">
                        <div>
                            <img
                                src={app.icon}
                                alt={app.name}
                                className="w-[15px]"
                            />
                        </div>
                        <p className="text-[12px] text-[#8b8d8e]">{app.name}</p>
                    </div>
                ))}
            </div>

            {openApp && (
                <div
                    className={`absolute w-full h-[92%] ${
                        openApp ? "openApp" : "closeApp"
                    } z-50`}>
                    <AppDetails
                        app={selectedApp}
                        setOpenApp={setOpenApp}
                        setSelectedApp={setSelectedApp}
                    />
                </div>
            )}
        </motion.div>
    );
};

export default AppStore;
