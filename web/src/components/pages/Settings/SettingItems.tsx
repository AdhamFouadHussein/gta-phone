import Icon from "../../../config/Icon";
import { SettingGroup } from "../../../config/inventory";
import { ChevronLeft } from "../../../config/svgIcons";
import "./index.css";
import SettingItemComponent from "./SettingItem";

type Props = {
    selectedGroup: SettingGroup;
    setSelectedGroup: (group: SettingGroup | null) => void;
};
function SettingItems({ selectedGroup, setSelectedGroup }: Props) {
    return (
        <div className="container mt-[50px] w-full">
            <div className="flex justify-start items-end bg-white  absolute left-0 right-0 top-[-40px] h-32 pb-2">
                <div
                    onClick={() => setSelectedGroup(null)}
                    className="cursor-pointer flex justify-start items-center mr-[10%]">
                    <Icon svg={ChevronLeft} fill="#007bfe" bg="transparent" />
                    <h3 className="text-[#007bfe] font-[500] text-sm">
                        Settings
                    </h3>
                </div>
                <h1 className="font-bold text-[16px] mb-[7px] ">
                    {selectedGroup.name}
                </h1>
            </div>
            <div className="mt-[50px] px-4 w-full flex flex-col justify-start items">
                {Object.values(selectedGroup.settingSections).map((section) => (
                    <div
                        key={section.id}
                        className={`${section.desc ? "mb-3" : "mb-6"}`}>
                        <h4 className="text-[#8e8e93] px-6 mb-1 text-xs uppercase">
                            {section.title}
                        </h4>
                        <div className="rounded-lg w-full bg-white  px-6 min-h-[38px]">
                            {section.items.map((item) => (
                                <SettingItemComponent
                                    item={item}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        {section.desc && (
                            <p className="text-[#8e8e93] text-sm px-6 mt-3">
                                {section.desc}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SettingItems;
