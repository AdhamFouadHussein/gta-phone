import { useEffect, useState } from "react";
import lowBattery from "../../../assets/images/lowBattery.png";
import capleCharrger from "../../../assets/images/capleCharrger.png";
import { useNavigate } from "react-router-dom";

const Battery = () => {
  const [chargging, setChargging] = useState("none");
  const [notChargging, setNotChargging] = useState("block");
  const navigate = useNavigate();

  const handleChargging = () => {
    setChargging("block");
    setNotChargging("none");
  };

  const myTimeout = setTimeout(navigate, 3000, "/");

  useEffect(() => {
    clearTimeout(myTimeout);
  }, []);

  return (
    <div
      className="absolute bottom-0 w-full h-full text-center"
      onClick={handleChargging}
    >
      <div className=" h-[30%] w-full "></div>
      <div className="relative h-[30%] w-full flex justify-center items-center">
        <img src={lowBattery} alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={85}
          height={85}
          viewBox="0 0 16 16"
          className="absolute left-[37%] hidden"
          style={{ display: chargging }}
        >
          <path
            fill="white"
            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
          ></path>
        </svg>
      </div>
      <div className="relative h-[40%]  w-full flex justify-center items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={43}
          height={43}
          viewBox="0 0 16 16"
          className="absolute left-[43%] top-9 "
          style={{ display: notChargging }}
        >
          <path
            fill="white"
            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
          ></path>
        </svg>
        <img src={capleCharrger} alt="" className="mr-2" />
      </div>
    </div>
  );
};

export default Battery;
