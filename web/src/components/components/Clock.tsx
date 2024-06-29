import { useState } from "react";

const Clock = () => {
  const time = new Date().toLocaleTimeString([], {
    hour12: false,
    minute: "2-digit",
    hour: "2-digit",
  });
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString([], {
      hour12: false,
      minute: "2-digit",
      hour: "2-digit",
    });
    if (time !== currentTime) {
      setCurrentTime(time);
    }
  };

  setInterval(updateTime, 1000);

  return <span className="block">{currentTime}</span>;
};

export default Clock;
