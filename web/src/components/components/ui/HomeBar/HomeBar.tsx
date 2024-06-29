import { useNavigate } from "react-router-dom";

type Props = {
  setOpenedFolder?: (value: boolean) => void;
  openedFolder?: boolean;
  bottom?: string;
  setAnsweredFullCall?: (value: boolean) => void;
  setOpenedFullCall?: (value: boolean) => void;
  setAcceptedCall?: (value: boolean) => void;
  dark?: boolean;
};
const HomeBar = ({
  setOpenedFolder,
  openedFolder,
  bottom = "30",
  setAnsweredFullCall,
  setOpenedFullCall,
  setAcceptedCall,
  dark,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (openedFolder) {
          setOpenedFolder && setOpenedFolder(false);
        } else {
          navigate("/");
          setAnsweredFullCall && setAnsweredFullCall(false);
          setOpenedFullCall && setOpenedFullCall(false);
          setAcceptedCall && setAcceptedCall(true);
        }
      }}
      className={` cursor-pointer absolute "bottom-3" left-[50%] transform -translate-x-[50%] z-30 !top-[unset]`}
      style={{ bottom: bottom }}
    >
      <div
        className={`${
          dark ? "bg-black" : "bg-white"
        }  h-1 w-[115px] mx-auto rounded-sm`}
      ></div>
    </div>
  );
};

export default HomeBar;
