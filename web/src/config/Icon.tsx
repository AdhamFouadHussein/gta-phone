import React, { ReactElement, SVGProps } from "react";

interface IconProps {
    parentWidth?: boolean;
    parentHeight?: boolean;
    svg: ReactElement<SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
    fill?: string;
    bg?: string;
    padding?: string;
    parentClassName?: string;
    onClick?: () => void;
}

const Icon = ({
    svg,
    width = 30,
    height = 30,
    fill = "white",
    bg = "transparent",
    parentHeight = true,
    parentWidth = true,
    padding,
    parentClassName,
    onClick
}: IconProps) => (
    <div
        style={{
            backgroundColor: bg,
            width: parentWidth ? width + 7 : "unset",
            height: parentHeight ? height + 7 : "unset",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            padding: padding,
        }}
        className={parentClassName}
        onClick={onClick}>
        {React.cloneElement(svg, { width, height, fill })}
    </div>
);

export default Icon;
