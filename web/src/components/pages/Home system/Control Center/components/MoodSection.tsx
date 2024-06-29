import React from "react";

type Props = {
  moodIcon: React.ReactNode;
  moodTitle: string;
  BGCOLOR: string;
  TEXTCOLOR: string;
  handleOnClickActive: () => void;
};
const MoodSection = ({
  moodIcon,
  moodTitle,
  BGCOLOR,
  TEXTCOLOR,
  handleOnClickActive,
}: Props) => {
  return (
    <div
      className={`${BGCOLOR} ${TEXTCOLOR} w-[80%] my-3 rounded-[50px] h-[7%] flex justify-between items-center px-3`}
      onClick={handleOnClickActive}
    >
      {moodIcon}
      <span>{moodTitle}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
  );
};

export default MoodSection;
