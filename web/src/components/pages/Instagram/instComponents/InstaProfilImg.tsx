import React from "react";
import Avatar from "react-avatar";

type Props = {
    name?: string;
    img?: string;
    border?: string;
    padding?: string;
};

const InstaProfilImg = ({ name, img, border, padding }: Props) => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className={`${border} ${padding} rounded-full`}>
                <Avatar src={img} round size="50" />
            </div>

            <p className="text-white m-auto text-xs">{name}</p>
        </div>
    );
};

export default InstaProfilImg;
