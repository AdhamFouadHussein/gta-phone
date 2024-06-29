import Icon from "../../../config/Icon";
import {
  Camera,
  ArrowLeft,
  VideoCamera,
  Phone,
  Dots,
  Magnify,
} from "../../../config/svgIcons";
import Contact from "./Contact";
import { ChatsType } from "../../../config/inventory";

type Props = {
  headerType: string;
  setHeaderType: (value: string) => void;
  selectedChat?: ChatsType | null;
  onCLick?: () => void;
  calling: boolean;
  setCalling: (value: boolean) => void;
};
function Header({
  headerType,
  setHeaderType,
  selectedChat,
  onCLick,
  calling,
  setCalling,
}: Props) {
  const handleActive = (value: string) => {
    setHeaderType(value);
  };

  const handleCalling = () => {
    setCalling(!calling);
  };

  const ChatsHeader = () => (
    <div className="flex justify-between items-center w-full">
      <div
        className={` ${
          headerType === "chats" ? "text-white" : "text-[#8097a1]"
        } transition-all duration-300 ease-in-out  flex justify-center items-center gap-5 text-sm`}
        onClick={() => handleActive("chats")}
      >
        <div>
          <Icon
            svg={Camera}
            fill="#999999"
            bg="transparent"
            parentHeight={false}
            parentWidth={false}
            width={22}
            height={22}
          />
        </div>
        CHATS
      </div>
      <div
        className={`${
          headerType === "status" ? "text-white" : "text-[#8097a1]"
        } transition-all duration-300 ease-in-out text-sm `}
        onClick={() => handleActive("status")}
      >
        STATUS
      </div>
      <div
        className={`${
          headerType === "calls" ? "text-white" : "text-[#8097a1]"
        } transition-all duration-300 ease-in-out text-sm`}
        onClick={() => handleActive("calls")}
      >
        CALLS
      </div>
    </div>
  );

  const ChatHeader = () => (
    <div className="w-full flex justify-start items-center ">
      <Icon
        svg={ArrowLeft}
        bg="transparent"
        fill="white"
        width={22}
        height={22}
        onClick={onCLick}
      />
      {selectedChat && (
        <Contact
          contactType="chat"
          img={selectedChat.img}
          name={selectedChat.userName}
        />
      )}

      <div className="flex justify-center items-center gap-1">
        <Icon
          svg={VideoCamera}
          bg="transparent"
          fill="#fff"
          parentHeight
          parentWidth
          width={20}
          height={20}
        />
        <Icon
          svg={Phone}
          bg="transparent"
          fill="#fff"
          parentHeight
          parentWidth
          width={20}
          height={20}
          onClick={handleCalling}
        />
        <Icon
          svg={Dots}
          bg="transparent"
          fill="#fff"
          parentHeight
          parentWidth
          width={20}
          height={20}
        />
      </div>
    </div>
  );

  const NewMsg = () => (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-5">
          <Icon
            svg={ArrowLeft}
            bg="transparent"
            fill="white"
            width={22}
            height={22}
            onClick={onCLick}
          />
          <div>
            <h3 className="text-sm">Select contact</h3>
            <p className="text-[10px] text-[#d3d3d3]">884 contacts</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Icon
            svg={Magnify}
            bg="transparent"
            fill="#fff"
            width={20}
            height={20}
          />
          <Icon
            svg={Dots}
            bg="transparent"
            fill="#fff"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );

  const renderedHeader = () => {
    switch (headerType) {
      case "chat":
        return <ChatHeader />;
      case "new":
        return <NewMsg />;
      default:
        return <ChatsHeader />;
    }
  };
  return (
    <div
      className={`w-full header relative cursor-pointer ${
        headerType === "chat"
          ? "bg-[#1b2b328e] backdrop-blur-md"
          : "bg-[#1c2d35] backdrop-blur-none"
      }  z-10`}
    >
      <div className="w-full h-3 absolute -bottom-1 left-0 bg-[#1b2b328e]  opacity-10 backdrop-blur-md"></div>
      {renderedHeader()}
    </div>
  );
}

export default Header;
