import phone from "../../../assets/images/phone.png";
import web from "../../../assets/images/web.png";
import Appstore from "../../../assets/images/Appstore.png";
import gallary from "../../../assets/images/gallary.png";
import { useNavigate } from "react-router-dom";

const footerApps = [
  {
    icon: phone,
    path: "/phonecall",
  },
  {
    icon: web,
    path: "/web",
  },
  {
    icon: Appstore,
    path: "/appstore",
  },
  {
    icon: gallary,
    path: "/gallery",
  },
];

function HomeFooter ()
{
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-[28px] left-[50%] transform -translate-x-[50%] w-[92%] h-[70px] rounded-[22px]  bg-[rgb(13_18_37_/_90%)] flex items-center justify-evenly z-10">
      {footerApps.map( ( item, index ) => (
        <div
          key={index + "n"}
          className="w-[18%] hover:opacity-80 transition-all ease-in-out duration-300"
          onClick={() => navigate( item.path )}
        >
          <img
            src={item.icon}
            alt=""
            className="cursor-pointer flex justify-center items-center w-full"
          />
        </div>
      ) )}
    </div>
  );
}

export default HomeFooter;
