import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import airpods from "../../../../assets/images/airpods.png";

const AirPods = () => {
  return (
    <div className="relative rounded-xl p-2 bg-neutral-900 w-full h-full flex flex-col justify-start items-center">
      <div className="flex justify-end items-center  w-full ">
        <img
          src={airpods}
          alt=""
          className="rounded-[50%] bg-neutral-600 p-3 w-[30%]"
        />
      </div>
      <span className="text-zinc-400 h-[40%]">Not Playing</span>
      <div className="flex justify-evenly items-center w-full">
        <span className="text-neutral-500">
          <SkipPreviousIcon />
        </span>
        <span>
          <PlayArrowIcon />
        </span>
        <span className="text-neutral-500">
          <SkipNextIcon />
        </span>
      </div>
    </div>
  );
};

export default AirPods;
