import "./index.css";
import Profile from "../../assets/images/profile.png";
import Icon from "../../../config/Icon";
import { useState } from "react";
import SettingItems from "./SettingItems";
import { SettingGroup } from "../../../config/inventory";
import { allGroups } from "./SettingsObject";
import { ChevronRight } from "../../../config/svgIcons";
import { motion } from "framer-motion";

function Settings() {
    const [selectedGroup, setSelectedGroup] = useState<SettingGroup | null>(
        null
    );

    const handleGroupClick = (group: SettingGroup) => {
        setSelectedGroup(group);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f2f2f7] relative flex flex-col justify-start items-start w-full h-full rounded-[40px] overflow-hidden overflow-y-auto noScroll">
            {selectedGroup ? (
                <SettingItems
                    selectedGroup={selectedGroup}
                    setSelectedGroup={setSelectedGroup}
                />
            ) : (
                <div className="container mt-[50px] px-5">
                    <h1 className="text-left text-3xl font-bold tracking-wide">
                        Settings
                    </h1>
                    <div className="profile bg-white rounded-lg p-1 w-full flex justify-center items-center gap-5 mt-5">
                        <img src={Profile} alt="profile"  className="w-10"/>
                        <div className="info">
                            <h1 className="text-[#007aff] text-base">
                                Sign in to your iPhone
                            </h1>
                            <p className="text-xs">
                                Set up iCloud, the App Store, and more.
                            </p>
                        </div>
                    </div>
                    {Object.values(allGroups).map((group) => (
                        <div className="setting-block" key={group[0].id}>
                            <ul>
                                {group.map((item) => (
                                    <li
                                        key={item.id}
                                        onClick={() => handleGroupClick(item)}>
                                        <Icon
                                            svg={item.icon}
                                            fill={item.fillColor}
                                            bg={item.bg}
                                            width={20}
                                            height={20}
                                            parentHeight={false}
                                            parentWidth={false}
                                            padding="3px"
                                        />
                                        <div>
                                            <p>{item.name}</p>
                                            <Icon
                                                svg={ChevronRight}
                                                fill="#c7c7cc"
                                                bg="transparent"
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

export default Settings;
