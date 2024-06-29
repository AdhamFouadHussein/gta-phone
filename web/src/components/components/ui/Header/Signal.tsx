import React, { useEffect, useState } from "react";
import Icon from "../../../../config/Icon";
import {
    Signal1,
    Signal2,
    Signal3,
    Signal4,
    Signal5,
    NoSignal,
} from "../../../../config/svgIcons";

type Props = {
    signalStatus?: number | undefined;
    dark?: boolean;
};
function Signal({ signalStatus, dark }: Props) {
    const [signal, setSignal] = useState<number | undefined>();

    useEffect(() => {
        if (signalStatus) {
            setSignal(signalStatus);
        } else {
            setSignal(4);
        }
    }, [signalStatus]);
    const renderSignal = () => {
        switch (signal) {
            case 0:
                return (
                    <Icon
                        svg={NoSignal}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );
            case 1:
                return (
                    <Icon
                        svg={Signal1}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );
            case 2:
                return (
                    <Icon
                        svg={Signal2}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );
            case 3:
                return (
                    <Icon
                        svg={Signal3}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );
            case 4:
                return (
                    <Icon
                        svg={Signal4}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );
            case 5:
                return (
                    <Icon
                        svg={Signal5}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );

            default:
                return (
                    <Icon
                        svg={Signal4}
                        bg="transparent"
                        width={15}
                        height={15}
                        parentWidth={false}
                        parentHeight={false}
                        fill={dark ? "black" : "white"}
                    />
                );
        }
    };
    return renderSignal();
}

export default Signal;
