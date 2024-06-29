import AppIcon from "../../../components/ui/app-icon/AppIcon";
// import facebook from "../../../assets/images/facebook.png";
// import tiktok from "../../../assets/images/tiktok.png";
// import snapchat from "../../../assets/images/snapchat.png";
// import ex from "../../../assets/images/ex.png";
// import setting from "../../../assets/images/setting.png";
// import Instashot from "../../../assets/images/insta.png";
// import folder from "../../../assets/images/folder.png";
// import whatsApp from "../../../assets/images/whatsApp.png";
import { useNavigate } from "react-router-dom";
import Folder from "../Folder/Folder";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { App } from "../../../../config/inventory";

type Props = {
  setOpenedFolder: (value: boolean) => void;
  openedFolder: boolean;
};
function HomeApps({ setOpenedFolder, openedFolder }: Props) {
  const navigate = useNavigate();

  // const apps = [
  //     {
  //         name: "Faces",
  //         icon: facebook,
  //         path: "/facebook",
  //     },
  //     {
  //         name: "TicTakTok",
  //         icon: tiktok,
  //         path: "/tiktok",
  //     },
  //     {
  //         name: "SnapOO",
  //         icon: snapchat,
  //         path: "/snapchat",
  //     },
  //     {
  //         name: "EX",
  //         icon: ex,
  //         path: "/ex",
  //     },
  //     {
  //         name: "Settings",
  //         icon: setting,
  //         path: "/setting",
  //     },
  //     {
  //         name: "Instashot",
  //         icon: Instashot,
  //         path: isLoggedIn && user? "/InstaHome" : "/loginIntsa",
  //     },
  //     {
  //         name: "Folder",
  //         icon: folder,
  //         path: "/folder",
  //     },
  //     {
  //         name: "ChatBro",
  //         icon: whatsApp,
  //         path: "/whatsApp",
  //     },
  // ];

  const [apps, setApps] = useState<App[]>([]);

  const [folderName, setFolderName] = React.useState<string>("Folder");

  useEffect(() => {
    const savedAppsData = localStorage.getItem("savedApps");

    if (savedAppsData) {
      const data: App[] = JSON.parse(savedAppsData);
      setApps(data);
    } else {
      // If no savedAppsData is found in localStorage, set an empty array
      setApps([]);
    }
  }, []);

  return (
    <div className=" mt-3 gap-[23px] w-full flex flex-wrap ml-2 ">
      {apps.map((app, index) => (
        <AppIcon
          key={index + "c"}
          name={app.name || ""}
          img={app?.icon || ""}
          folderName={folderName}
          onClick={() => {
            if (app.name === "Folder") {
              setOpenedFolder(true);
            } else {
              navigate(app.path || "");
            }
          }}
        />
      ))}
      {openedFolder && (
        <Folder
          openedFolder={openedFolder}
          setOpenedFolder={setOpenedFolder}
          setFolderName={setFolderName}
          folderName={folderName}
        />
      )}
    </div>
  );
}

HomeApps.prototype = {
  setOpenedFolder: PropTypes.func.isRequired,
  openedFolder: PropTypes.bool.isRequired,
};

export default HomeApps;
