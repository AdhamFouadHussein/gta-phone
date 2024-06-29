import React from "react";
type Props = {
  svgIcon: React.ReactNode;
  round: string;
  firstBg: string;
  iconWidth: string;
  iconHeight: string;
  handleClick?: () => void;
  question?: boolean;
  secondBg?: string;
  pading?: string;

}
const ControlCenterBtn = ({
  handleClick,
  question,
  firstBg,
  secondBg,
  pading,
  svgIcon,
  round,
  iconWidth,
  iconHeight,
}: Props) => {
  return (
    <div
      className={`${!question ? firstBg : secondBg
        } ${pading}  ${round} flex items-center justify-center`}
      onClick={handleClick}
      style={{ width: iconWidth, height: iconHeight }}
    >
      {/* <img src={image} alt="" className={imgWidth} /> */}
      {svgIcon}
      {/* <div className="w-full h-full">{svgIcon}</div> */}
    </div>
  );
};

export default ControlCenterBtn;
