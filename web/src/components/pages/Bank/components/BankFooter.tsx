import React from "react";
import more from "../../../assets/images/Bank/more.png";
import chart from "../../../assets/images/Bank/chart.png";
import { Link } from "react-router-dom";

type BankIcon = {
  img1: string;
  img2: string;
};

const BankFooter = ({ img1, img2 }: BankIcon) => {
  return (
    <div className="absolute flex justify-between items-center bottom-5 w-full h-16 px-6">
      <Link to={"/bankHome"}>
        <img src={img1} alt="" />
      </Link>
      <Link to={"/bankTransfer"}>
        <img src={img2} alt="" />
      </Link>
      <div>
        <img src={chart} alt="" />
      </div>
      <div>
        <img src={more} alt="" />
      </div>
    </div>
  );
};

export default BankFooter;
