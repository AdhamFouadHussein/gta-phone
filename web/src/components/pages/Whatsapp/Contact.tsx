import { ArrowDownLeft } from "../../../config/svgIcons";
import Icon from "../../../config/Icon";
import Seen from "./Seen";
import { Messages } from "../../../config/inventory";

interface Props {
  contactType: string;
  onClick?: () => void;
  img: string | undefined;
  name: string;
  desc?: string | undefined;
  missedCall?: boolean;
  parentClass?: string;
  DescClassName?: string;
  seen?: boolean | undefined;
  hideSeen?: boolean | Messages[] | undefined;
  viewed?: boolean;
}
function Contact({
  contactType,
  onClick,
  img,
  name,
  desc,
  missedCall,
  parentClass,
  DescClassName,
  seen,
  hideSeen,
  viewed,
}: Props) {
  const Chats = () => (
    <>
      <img src={img} alt={name} className="w-[40px]" />
      <div>
        <h3 className="text-sm font-[500] ">{name}</h3>
        <div className="flex justify-start items-center gap-1">
          <Seen seen={seen} hideSeen={hideSeen} />
          <p className={`text-xs ${DescClassName}`}>{desc}</p>
        </div>
      </div>
    </>
  );

  const Status = () => (
    <>
      <img
        src={img}
        alt={name}
        className={`w-[40px] border-[2px] ${
          viewed ? "border-[#687c86]" : "border-[#05a351]"
        } rounded-full`}
      />
      <div>
        <h3 className="text-sm font-[500]">{name}</h3>
        <p className={`text-xs font-light text-[#8097a1] ${DescClassName}`}>
          {desc}
        </p>
      </div>
    </>
  );

  const Chat = () => (
    <>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-3">
          <img src={img} alt={name} className="w-[35px] " />
          <h3 className=" font-[500] w-full">{name}</h3>
        </div>
      </div>
    </>
  );

  const Calls = () => (
    <>
      <img src={img} alt={name} className="w-[40px] " />
      <div>
        <h3 className="text-sm font-[500]">{name}</h3>
        <div className=" flex justify-start items-center gap-1 ">
          <Icon
            svg={ArrowDownLeft}
            bg="transparent"
            fill={missedCall ? "#ff0000" : "#05de6d"}
            width={15}
            parentWidth={false}
            parentHeight={false}
          />
          <p className={`text-xs font-light text-[#8097a1] ${DescClassName}`}>
            {desc}
          </p>
        </div>
      </div>
    </>
  );

  const NewContact = () => (
    <>
      <img src={img} alt={name} className="w-[40px] " />
      <div>
        <h3 className="text-sm font-[500]">{name}</h3>
        <p className={`text-xs font-light text-[#8097a1] ${DescClassName}`}>
          {desc}
        </p>
      </div>
    </>
  );

  const renderedContact = () => {
    switch (contactType) {
      case "chats":
        return <Chats />;
      case "status":
        return <Status />;
      case "new":
        return <NewContact />;
      case "chat":
        return <Chat />;
      case "calls":
        return <Calls />;
      default:
        return <Chats />;
    }
  };

  return (
    <div
      className={`w-full flex justify-start items-center gap-3 ${parentClass}`}
      onClick={onClick}
    >
      {renderedContact()}
    </div>
  );
}

export default Contact;
