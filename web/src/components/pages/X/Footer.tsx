import React from "react";
import Icon from "../../../config/Icon";
import { Home, Magnify } from "../../../config/svgIcons";

function Footer() {
    return (
        <div className="w-full h-20 absolute left-0 bottom-0 right-0 z-20 flex justify-evenly items-center px-[40px] bg-[#2427288e] backdrop-blur-md rounded-b-[35px]">
            <Icon svg={Home} fill="#24a1ef" />
            <Icon svg={Magnify} fill="#687682" />
        </div>
    );
}

export default Footer;
