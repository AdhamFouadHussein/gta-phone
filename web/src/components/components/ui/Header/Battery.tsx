import React, { useEffect, useState } from "react";
import {
  Battery1,
  Battery2,
  Battery3,
  Battery4,
} from "../../../../config/svgIcons";
import Icon from "../../../../config/Icon";

type Props = {
  batteryStatus?: number | undefined;
  dark?: boolean;
};
function Battery({ batteryStatus, dark }: Props) {
  const [battery, setBattery] = useState<number | undefined>();

  useEffect(() => {
    if (batteryStatus) {
      setBattery(batteryStatus);
    } else {
      setBattery(1);
    }
  }, [batteryStatus]);
  const renderSignal = () => {
    switch (battery) {
      case 1:
        return (
          <Icon
            svg={Battery1}
            bg="transparent"
            width={20}
            height={20}
            parentWidth={false}
            parentHeight={false}
            parentClassName="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            fill={dark ? "black" : "white"}
          />
        );
      case 2:
        return (
          <Icon
            svg={Battery2}
            bg="transparent"
            width={20}
            height={20}
            parentWidth={false}
            parentHeight={false}
            parentClassName="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            fill={dark ? "black" : "white"}
          />
        );
      case 3:
        return (
          <Icon
            svg={Battery3}
            bg="transparent"
            width={20}
            height={20}
            parentWidth={false}
            parentHeight={false}
            parentClassName="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            fill={dark ? "black" : "white"}
          />
        );
      case 4:
        return (
          <Icon
            svg={Battery4}
            bg="transparent"
            width={20}
            height={20}
            parentWidth={false}
            parentHeight={false}
            parentClassName="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        );
    }
  };
  return <div className="relative ml-3">{renderSignal()}</div>;
}

export default Battery;
