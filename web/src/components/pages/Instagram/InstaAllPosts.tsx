import React from "react";
import InstaFooter from "./instComponents/InstaFooter";
import InstaGallery from "./instComponents/InstaGallery";
import { Link } from "react-router-dom";

const InstaAllPosts = () => {
    return (
        <div className="absolute left-2 top-[10px] w-[95%] rounded-[30px] h-[97%] bg-black flex flex-col justify-center items-center">
            {/* start header */}
            <div className="text-white w-full flex justify-start items-center gap-[90px] absolute top-12 left-1  ">
                <Link to={"/intaProfileData"} className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"></path>
                    </svg>
                </Link>
                <span className="text-sm">All Posts</span>
            </div>
            {/* start body */}
            <div>{/* <InstaGallery width={295} height={465} /> */}</div>
            {/* start footer */}
            <div>
                <InstaFooter />
            </div>
        </div>
    );
};

export default InstaAllPosts;
