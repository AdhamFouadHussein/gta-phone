import Clock from "../../Clock";
import { useEffect, useRef, useState } from "react";
import Notifications from "../../../pages/Home system/Notifications/Notifications";
import FaceId from "../../../pages/Home system/Face id/FaceId";
import { blue } from "@mui/material/colors";
import ControlCenter from "../../../pages/Home system/Control Center/ControlCenter";
import HomeBar from "../HomeBar/HomeBar";
import Signal from "./Signal";
import Wifi from "./Wifi";
import Battery from "./Battery";

const Header = ({ dark = false }) => {
    const [open, setOpen] = useState(false);
    const timer = useRef<number>();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
    const [showCenter, setshowCenter] = useState(false);

    const handleClickOpen = () => {
        if (!open) {
            setShow(true);
            setOpen(false);
            handleButtonClick();
            timer.current = window.setTimeout(() => {
                setOpen(true);
            }, 2000);
        } else {
            setOpen(false);
        }
    };

    const buttonSx = {
        ...(success && {
            bgcolor: blue[500],
            "&:hover": {
                bgcolor: blue[700],
            },
        }),
    };

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 1000);
        }
    };

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleShowControlCenter = () => {
        setshowCenter(!showCenter);
    };

    return (
        <>
            <div
                className={`absolute  ${
                    dark ? "text-black" : "text-white"
                } h-[40px] w-full mx-auto left-0 px-8 flex justify-between items-center`}
                style={{ zIndex: 200 }}>
                <div className="cursor-pointer text-[12px] ">
                    <Clock />
                </div>
                <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={handleShowControlCenter}>
                    <Signal dark={dark} />
                    <Wifi dark={dark} />
                    <Battery dark={dark} />
                </div>
            </div>
            {/* lockScreen & FaceID & Notifications */}
            {/* <div
        className={`absolute w-[92%] h-[95%] left-[11px] z-30 text-white ${
          open ? "top-[-1000px]" : "top-[10px] "
        } duration-300 `}
        style={{
          transition: "2s",
        }}
      >
        <div
          style={{ filter: " blur(5px)" }}
          className="backGroundHome w-full h-full"
        ></div>
        <div className=" absolute left-2 top-[10px] w-[95%] rounded-[30px] h-[97%] pt-7 flex justify-center ">
          <Notifications handleClickOpen={handleClickOpen} />
          <div
            className={` ${
              show ? "block" : "hidden"
            }  absolute w-[108%] h-[100%] -left-3 flex justify-center items-center top-0 rounded-[30px] `}
            style={{
              background: "rgb(0 0 0 / 90%)",
              zIndex: "300",
            }}
          >
            <FaceId buttonSx={buttonSx} success={success} />
          </div>
        </div>
      </div> */}

            {/* Control Center*/}
            <div
                className={` absolute left-2 rounded-[30px]  w-[95%] h-[100%] z-20 text-white ${
                    !showCenter ? "top-[-1000px]" : "top-[10px] "
                } duration-300 `}
                style={{
                    transition: "1s",
                    borderBottomLeftRadius: "40px",
                    borderBottomRightRadius: "40px",
                }}>
                <div
                    className={` ${
                        show ? "block" : "hidden"
                    } none absolute w-full h-[97%] rounded-[30px]  bg-black/60 backdrop-blur-md flex justify-center items-start top-0 pt-[100px]`}
                    style={{
                        zIndex: "500",
                    }}>
                    <ControlCenter />
                    <div
                        className=" w-full z-50"
                        onClick={handleShowControlCenter}>
                        <HomeBar bottom="10px" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
