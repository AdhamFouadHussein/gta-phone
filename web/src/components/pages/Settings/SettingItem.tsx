import Icon from "../../../config/Icon";
import { SettingItem } from "../../../config/inventory";
import Toggler from "../../components/ui/Toggler/Toggler";
import { ChevronRight } from "../../../config/svgIcons";

type props = {
    item: SettingItem;
};

function SettingItemComponent({ item }: props) {
    const handleClick = () => {
        if (item.type.type === "action") {
            item.type.action(); // Call action function if it exists
        } else if (item.type.type === "tab") {
            // Navigate to specific sub-setting page
        }
    };
    return (
        <div className="w-full border-b border-[#c7c7cc] flex justify-between items-center gap-10 py-2 last-of-type:border-b-0">
            <p
                onClick={handleClick}
                className={`${
                    item.type.type === "action" &&
                    "text-[#007bfe] cursor-pointer "
                } text-sm  font-[500]`}>
                {item.name}
            </p>
            <div className="flex justify-between items-center">
                {item.type.type === "toggle" && (
                    <Toggler checked={item.type.checked} />
                )}
                {item.type.type === "tab" && (
                    // Render tab content
                    <Icon svg={ChevronRight} bg="transparent" fill="#c7c7cc" />
                )}
            </div>
        </div>
    );
}

export default SettingItemComponent;
