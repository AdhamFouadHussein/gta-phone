import React from "react";
import { ex } from "../../../config/svgIcons";
import Icon from "../../../config/Icon";
import XUser from "../../assets/images/XUser.png";
function XHeader() {
    return (
        <div className="w-full h-20 absolute inset-0 z-20 flex items-end pt-0 px-[10px] pb-[5px] bg-[#2427288e] backdrop-blur-md rounded-t-[35px]">
            <div className="profile relative rounded-full">
                <img src={XUser} alt="XUser" className="w-[30px] h-[30px] " />
                <span className="online w-[6px] h-[6px] bg-[#4e9ee8] rounded-full absolute top-0 right-0  border-[1px] border-black"></span>
            </div>
            <Icon
                svg={ex}
                fill="white"
                width={20}
                height={20}
                parentClassName="flex-1 -ml-7"
            />
        </div>
    );
}

export default XHeader;
