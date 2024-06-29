import React from "react";
import Icon from "../../../../config/Icon";
import { Wifi as WifiIcon } from "../../../../config/svgIcons";

type Props = {
    dark?: boolean;
};
function Wifi({ dark }: Props) {
    return (
        <Icon
            svg={WifiIcon}
            bg="transparent"
            width={10}
            height={10}
            parentWidth={false}
            parentHeight={false}
            fill={dark ? "black" : "white"}
        />
    );
}

export default Wifi;
