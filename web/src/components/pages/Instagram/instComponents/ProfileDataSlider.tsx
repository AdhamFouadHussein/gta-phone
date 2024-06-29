import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../config/Icon";
import { Favorite } from "../../../../config/svgIcons";
import { useState } from "react";
import Saves from "./Saves";

type Props = {
    slider: boolean;
    setSlider: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileDataSlider = ({ slider, setSlider }: Props) => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [hovered, setHovered] = useState(false);
    const [showSaves, setShowSaves] = useState(false);

    const handleShowSaves = () => {
        setShowSaves(!showSaves);
        setSlider(!slider);
    };
    return (
        <>
            <div
                className={`text-white pl-3  flex justify-between right-0 items-start flex-col absolute mt-9 bg-black top-[4px] px-0 ${
                    // slider ? "-right-[1px]" : "-right-[190px]"
                    slider ? "w-[55%] opacity-100 z-30" : "w-0 opacity-0 -z-30"
                } h-[87%]`}
                style={{ transition: " 0.5s ease" }}>
                <div className="flex justify-start items-start flex-col gap-5 text-xs">
                    <div>{user?.Username}</div>
                    <div
                        className="flex justify-center items-center gap-2 cursor-pointer text-white/50 hover:text-white transition-all duration-200 ease-in-out"
                        onMouseEnter={() => {
                            setHovered(true);
                        }}
                        onMouseLeave={() => setHovered(false)}
                        onClick={handleShowSaves}>
                        <Icon
                            svg={Favorite}
                            fill={hovered ? "white" : "transparent"}
                            parentHeight={false}
                            parentWidth={false}
                            height={20}
                            width={20}
                        />

                        <span>Saved</span>
                    </div>
                </div>
                <div
                    className="flex justify-center items-center gap-2 text-xs cursor-pointer"
                    onClick={() => {
                        logout();
                        navigate("/loginIntsa");
                    }}>
                    <span className="text-red-700 hover:text-red-600 transition-all duration-300 ease-in-out">
                        Logout
                    </span>
                </div>
            </div>

            {showSaves && <Saves setShowSaves={setShowSaves} />}
        </>
    );
};

export default ProfileDataSlider;
