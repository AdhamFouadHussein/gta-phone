import HomeApps from "./HomeApps";
import HomeFooter from "./HomeFooter";
import camera from "../../../assets/images/camera.png";
import maps from "../../../assets/images/maps.png";
import calc from "../../../assets/images/calc.png";
import shopping from "../../../assets/images/shopping.png";
import clock from "../../../assets/images/wallpaper2.png";
import Clock from "../../../components/Clock";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
// import CallNotification from "../Calls/CallNotification";

const apps = [
  {
    name: "camera",
    icon: camera,
    path: "/camera",
  },
  {
    name: "maps",
    icon: maps,
    path: "/maps",
  },
  {
    name: "Calculator",
    icon: calc,
    path: "/calculator",
  },
  {
    name: "Shopping",
    icon: shopping,
    path: "/shopping",
  },
];

const HomePhone = () => {
  const navigate = useNavigate();
  const [openedFolder, setOpenedFolder] = useState(false);
  // const [ callDeclined, setCallDeclined ] = useState( false );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="backGroundHome relative rounded-[30px] w-full h-full overflow-hidden"
    >
      {/* {!callDeclined && (
        <div className="calls relative" >
          <CallNotification setCallDeclined={setCallDeclined} />
        </div>
      )} */}
      <div className=" px-3 pt-[50px] flex justify-center items-center mx-auto gap-3">
        {/* Static Apps */}
        <div className="w-[48%] text-center">
          <div className="relative ">
            <img src={clock} alt="" className="w-full" />
            <div
              className="absolute top-[50%] left-[50%] text-4xl font-bold"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <Clock />
            </div>
          </div>
          <p className="text-white text-[10px] mt-[3px]">Clock</p>
        </div>
        <div className="w-[48%] flex flex-wrap justify-center gap-4 items-center ">
          {apps.map((item, index) => {
            return (
              <div
                key={index + "m"}
                className={`hover:border-2 border-white text-white text-center w-[38%] h-full flex items-center justify-center flex-col`}
                style={{}}
                onClick={() => navigate(item.path)}
              >
                <img src={item.icon} alt="" className="w-full" />
                <p className="text-[10px] mt-[2px]">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Apps */}
      <div className="px-3 mt-2 w-full flex items-center">
        <HomeApps
          openedFolder={openedFolder}
          setOpenedFolder={setOpenedFolder}
        />
      </div>
      <HomeFooter />
    </motion.div>
  );
};

export default HomePhone;
