import React from "react";
import Icon from "../../../config/Icon";
import { Check } from "../../../config/svgIcons";
import { Messages } from "../../../config/inventory";

type Props = {
    seen?: boolean | undefined;
    className?: string;
    hideSeen?: boolean | Messages[] | undefined;
};
function Seen({ seen, className, hideSeen }: Props) {
    return (
        <>
            {hideSeen !== undefined && hideSeen ? null : seen !== undefined &&
              seen ? (
                <div className={`relative ${className && className}`}>
                    <Icon
                        svg={Check}
                        bg="transparent"
                        fill="#26a2fc"
                        parentClassName="absolute top-0 left-[5px]"
                        width={15}
                        height={15}
                        parentHeight={false}
                        parentWidth={false}
                    />
                    <Icon
                        svg={Check}
                        bg="transparent"
                        fill="#26a2fc"
                        width={15}
                        height={15}
                        parentHeight={false}
                        parentWidth={false}
                    />
                </div>
            ) : seen !== undefined && !seen ? (
                <div className={`relative ${className && className}`}>
                    <Icon
                        svg={Check}
                        bg="transparent"
                        fill="#999999"
                        parentClassName="absolute top-0 left-[5px]"
                        width={15}
                        height={15}
                        parentHeight={false}
                        parentWidth={false}
                    />
                    <Icon
                        svg={Check}
                        bg="transparent"
                        fill="#999999"
                        width={15}
                        height={15}
                        parentHeight={false}
                        parentWidth={false}
                    />
                </div>
            ) : null}
        </>
    );
}

export default Seen;
