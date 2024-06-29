import React from "react";
import Icon from "../../../config/Icon";
import { Plus } from "../../../config/svgIcons";

type Props = {
    onClick: () => void;
};
function FloatingButton({ onClick }: Props) {
    return (
        <div
            className="absolute bottom-24 right-3 w-[50px] h-[50px] rounded-full bg-[#24a1ef] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105  hover:bg-[#218cce]"
            onClick={onClick}>
            <Icon svg={Plus} />
        </div>
    );
}

export default FloatingButton;
